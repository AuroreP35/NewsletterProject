<?php

namespace App\Controller;

use App\Entity\Newsletter;
use App\Form\NewsletterContentType;
use App\Repository\NewsletterRepository;
use App\Repository\SubscriberRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Routing\Attribute\Route;
use App\Exception\NewsletterException;
use App\Repository\NewsletterStatsRepository;
use Psr\Log\LoggerInterface;
use App\Entity\NewsletterStats;

#[Route('/newsletter/admin', name: 'app_newsletter_admin_')]
final class NewsletterAdminController extends AbstractController
{
    public function __construct(
        private LoggerInterface $logger
    ) {}

    #[Route('/', name: 'index', methods: ['GET'])]
    public function index(NewsletterRepository $newsletterRepository): Response
    {
        return $this->render('newsletter_admin/index.html.twig', [
            'newsletters' => $newsletterRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(
        Request $request, 
        EntityManagerInterface $entityManager,
        MailerInterface $mailer,
        SubscriberRepository $subscriberRepository
    ): Response {
        $newsletter = new Newsletter();
        $form = $this->createForm(NewsletterContentType::class, $newsletter);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            try {
                // Vérifier s'il y a des abonnés
                $subscribers = $subscriberRepository->findAll();
                if (empty($subscribers)) {
                    throw new NewsletterException('Aucun abonné trouvé.', NewsletterException::ERROR_NO_SUBSCRIBERS);
                }

                // Vérifier le contenu
                if (empty(trim(strip_tags($newsletter->getContent())))) {
                    throw new NewsletterException('Le contenu de la newsletter ne peut pas être vide.', NewsletterException::ERROR_INVALID_CONTENT);
                }

                $email = (new TemplatedEmail())
                    ->from('newsletter@monsite.fr')
                    ->subject($newsletter->getSubject())
                    ->htmlTemplate('emails/newsletter.html.twig');

                // Debug avec message flash
                $this->addFlash('info', 'Début de l\'envoi de la newsletter');

                $subscribers = $subscriberRepository->findAll();
                $this->addFlash('info', 'Nombre d\'abonnés trouvés : ' . count($subscribers));

                // Debug de chaque abonné
          //      foreach ($subscribers as $subscriber) {
          //          $this->addFlash('info', 'Abonné : ' . $subscriber->getEmail());
          //      }

                foreach ($subscribers as $subscriber) {
                    try {
                        $trackingToken = bin2hex(random_bytes(32));
                        
                        // Créer et persister les stats AVANT l'envoi
                        $stats = new NewsletterStats();
                        $stats->setNewsletter($newsletter)
                             ->setSubscriber($subscriber)
                             ->setTrackingToken($trackingToken);
                        $entityManager->persist($stats);
                        $entityManager->persist($newsletter);
                        $entityManager->flush();
                        
                        $email->to($subscriber->getEmail())
                             ->context([
                                'content' => $newsletter->getContent(),
                                'subscriber' => $subscriber,
                                'trackingToken' => $trackingToken
                             ]);
                        
                        // Tentative d'envoi
                        $mailer->send($email);
                        
                        // Message de confirmation: debug
                        //$this->addFlash('success', 'Email envoyé à : ' . $subscriber->getEmail());
                        
                    } catch (\Exception $e) {
                        // Message d'erreur
                        $this->addFlash('error', 'Erreur pour ' . $subscriber->getEmail() . ': ' . $e->getMessage());
                    }
                }

                $newsletter->setSent(true);
                $newsletter->setSentAt(new \DateTimeImmutable());
                $entityManager->persist($newsletter);
                $entityManager->flush();

                $this->addFlash('success', 'La newsletter a été envoyée avec succès.');
                return $this->redirectToRoute('app_newsletter_admin_index');

            } catch (NewsletterException $e) {
                $this->addFlash('error', 'Erreur générale : ' . $e->getMessage());
            }
        }

        return $this->render('newsletter_admin/new.html.twig', [
            'newsletter' => $newsletter,
            'form' => $form,
        ]);
    }

    #[Route('/{id}/delete', name: 'delete', methods: ['POST'])]
    public function delete(
        Request $request, 
        Newsletter $newsletter, 
        EntityManagerInterface $entityManager,
        NewsletterStatsRepository $statsRepository
    ): Response {
        if ($this->isCsrfTokenValid('delete'.$newsletter->getId(), $request->getPayload()->getString('_token'))) {
            // Supprimer d'abord les statistiques associées
            $stats = $statsRepository->findBy(['newsletter' => $newsletter]);
            foreach ($stats as $stat) {
                $entityManager->remove($stat);
            }
            
            // Puis supprimer la newsletter
            $entityManager->remove($newsletter);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_newsletter_admin_index');
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(Newsletter $newsletter): Response
    {
        return $this->render('newsletter_admin/show.html.twig', [
            'newsletter' => $newsletter,
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Newsletter $newsletter, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(NewsletterContentType::class, $newsletter);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_newsletter_admin_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('newsletter_admin/edit.html.twig', [
            'newsletter' => $newsletter,
            'form' => $form,
        ]);
    }

    #[Route('/preview', name: 'preview', methods: ['POST'])]
    public function preview(Request $request): Response
    {
        $content = $request->request->get('content');
        $subject = $request->request->get('subject');
        
        return $this->render('newsletter_admin/preview.html.twig', [
            'content' => $content,
            'subject' => $subject
        ]);
    }

    #[Route('/{id}/stats', name: 'app_newsletter_admin_stats', methods: ['GET'])]
    public function stats(
        Newsletter $newsletter,
        NewsletterStatsRepository $statsRepository
    ): Response {
        $stats = $statsRepository->findBy(['newsletter' => $newsletter]);
        
        // Calcul des statistiques
        $totalSubscribers = count($stats);
        $openCount = count(array_filter($stats, fn($stat) => $stat->getOpenedAt() !== null));
        $totalClicks = array_sum(array_map(fn($stat) => $stat->getClickCount(), $stats));
        
        // Calcul des taux (éviter division par zéro)
        $openRate = $totalSubscribers > 0 ? round(($openCount / $totalSubscribers) * 100, 1) : 0;
        $clickRate = $openCount > 0 ? round(($totalClicks / $openCount) * 100, 1) : 0;
        
        // Préparation des données pour le graphique des clics
        $clicksData = [];
        foreach ($stats as $stat) {
            // Supposons que vous avez une autre façon de récupérer les clics
            // Par exemple, si vous avez un champ dans l'entité pour les clics
            $url = 'some_url'; // Remplacez par la logique pour obtenir l'URL
            $count = $stat->getClickCount(); // Utilisez le nombre de clics directement

            if (!isset($clicksData[$url])) {
                $clicksData[$url] = 0;
            }
            $clicksData[$url] += $count;
        }
        
        // Formater les données pour Chart.js
        $clicksDataFormatted = array_map(function($url, $count) {
            return [
                'url' => (strlen($url) > 30) ? substr($url, 0, 30) . '...' : $url,
                'count' => $count
            ];
        }, array_keys($clicksData), array_values($clicksData));

        return $this->render('newsletter_admin/stats.html.twig', [
            'newsletter' => $newsletter,
            'stats' => $stats,
            'openRate' => $openRate,
            'clickRate' => $clickRate,
            'totalClicks' => $totalClicks,
            'clicksData' => $clicksDataFormatted
        ]);
    }
}
