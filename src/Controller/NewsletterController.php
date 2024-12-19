<?php

namespace App\Controller;

use App\Entity\Subscriber;
use App\Form\NewsletterType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\SubscriberRepository;
use App\Repository\NewsletterStatsRepository;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mime\Address;
use Symfony\Component\Mailer\MailerInterface;

final class NewsletterController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(): Response
    {
        return $this->render('newsletter/index.html.twig');
    }

    #[Route('/newsletter/subscribe', name: 'app_newsletter_subscribe')]
    public function subscribe(
        Request $request, 
        EntityManagerInterface $entityManager,
        SubscriberRepository $subscriberRepository,
        MailerInterface $mailer
    ): Response
    {
        $subscriber = new Subscriber();
        $form = $this->createForm(NewsletterType::class, $subscriber);
        
        $form->handleRequest($request);
        
        if ($form->isSubmitted() && $form->isValid()) {
            // Vérifier si l'email existe déjà
            $existingSubscriber = $subscriberRepository->findByEmail($subscriber->getEmail());
            
            if ($existingSubscriber) {
                $this->addFlash('error', 'Cette adresse email est déjà inscrite à la newsletter.');
                return $this->redirectToRoute('app_newsletter_subscribe');
            }

            // Générer automatiquement le token et la date
            $subscriber->setUnsubscribeToken(bin2hex(random_bytes(32)))
                      ->setCreateAt(new \DateTimeImmutable());
            
            $entityManager->persist($subscriber);
            $entityManager->flush();

            $subscriber->setConfirmationToken(bin2hex(random_bytes(32)));
            $entityManager->persist($subscriber);
            $entityManager->flush();

            $email = (new TemplatedEmail())
                ->from('newsletter@monsite.fr')
                ->to($subscriber->getEmail())
                ->subject('Confirmation de votre inscription à la newsletter')
                ->htmlTemplate('emails/confirmation.html.twig')
                ->context([
                    'subscriber' => $subscriber,
                ]);

            $mailer->send($email);

            $this->addFlash('success', 'Inscription réussie !');
            return $this->redirectToRoute('app_newsletter_subscribe');
        }

        return $this->render('newsletter/subscribe.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/newsletter/unsubscribe/{token}', name: 'app_newsletter_unsubscribe')]
    public function unsubscribe(string $token): Response
    {
        return $this->render('newsletter/unsubscribe_confirm.html.twig', [
            'token' => $token
        ]);
    }

    #[Route('/newsletter/unsubscribe/{token}/confirm', name: 'app_newsletter_unsubscribe_confirm', methods: ['POST'])]
    public function unsubscribeConfirm(
        string $token,
        Request $request,
        SubscriberRepository $subscriberRepository,
        EntityManagerInterface $entityManager
    ): Response {
        if (!$this->isCsrfTokenValid('unsubscribe' . $token, $request->request->get('_token'))) {
            throw $this->createAccessDeniedException('Token CSRF invalide.');
        }

        $subscriber = $subscriberRepository->findOneByUnsubscribeToken($token);
        
        if (!$subscriber) {
            throw $this->createNotFoundException('Lien de désinscription invalide.');
        }
        
        $entityManager->remove($subscriber);
        $entityManager->flush();
        
        $this->addFlash('success', 'Vous avez été désinscrit avec succès.');
        return $this->redirectToRoute('app_home');
    }

    #[Route('/track/open/{token}', name: 'app_newsletter_track_open')]
    public function trackOpen(
        string $token,
        NewsletterStatsRepository $statsRepository,
        EntityManagerInterface $entityManager
    ): Response {
        if ($stats = $statsRepository->findOneBy(['trackingToken' => $token])) {
            if (!$stats->getOpenedAt()) {
                $stats->setOpenedAt(new \DateTimeImmutable());
                $entityManager->flush();
            }
        }

        // Retourne une image transparente 1x1
        return new Response(
            base64_decode('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'),
            200,
            ['Content-Type' => 'image/gif']
        );
    }

    #[Route('/track/click/{token}', name: 'app_newsletter_track_click')]
    public function trackClick(
        string $token,
        string $url,
        NewsletterStatsRepository $statsRepository,
        EntityManagerInterface $entityManager
    ): Response {
        if ($stats = $statsRepository->findOneBy(['trackingToken' => $token])) {
            $stats->incrementClickCount();
            $entityManager->flush();
        }

        return $this->redirect(base64_decode($url));
    }

    #[Route('/newsletter/confirm/{token}', name: 'app_newsletter_confirm')]
    public function confirm(string $token, SubscriberRepository $subscriberRepository, EntityManagerInterface $entityManager): Response
    {
        $subscriber = $subscriberRepository->findOneBy(['confirmationToken' => $token]);

        if (!$subscriber) {
            throw $this->createNotFoundException('Lien de confirmation invalide.');
        }

        // Marquer l'abonné comme confirmé
        $subscriber->setIsConfirmed(true);
        $entityManager->flush();

        // Ajouter un message flash de succès
        $this->addFlash('success', 'Votre inscription à la newsletter a été confirmée avec succès.');

        // Rediriger vers la page d'accueil
        return $this->redirectToRoute('app_home');
    }
}
