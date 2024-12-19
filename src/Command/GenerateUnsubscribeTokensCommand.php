<?php

namespace App\Command;

use App\Repository\SubscriberRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

#[AsCommand(
    name: 'app:generate-unsubscribe-tokens',
    description: 'Génère les tokens de désinscription manquants'
)]
class GenerateUnsubscribeTokensCommand extends Command
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private SubscriberRepository $subscriberRepository
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $subscribers = $this->subscriberRepository->findBy(['unsubscribeToken' => null]);
        
        foreach ($subscribers as $subscriber) {
            $subscriber->setUnsubscribeToken(bin2hex(random_bytes(32)));
            $this->entityManager->persist($subscriber);
        }
        
        $this->entityManager->flush();
        $output->writeln(sprintf('Tokens générés pour %d abonnés', count($subscribers)));
        
        return Command::SUCCESS;
    }
} 