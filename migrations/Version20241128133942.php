<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20241128133942 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE newsletter_stats (id INT AUTO_INCREMENT NOT NULL, newsletter_id INT NOT NULL, subscriber_id INT NOT NULL, tracking_token VARCHAR(255) NOT NULL, opened_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', click_count INT NOT NULL, INDEX IDX_DD2A2B5E22DB1917 (newsletter_id), INDEX IDX_DD2A2B5E7808B1AD (subscriber_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE newsletter_stats ADD CONSTRAINT FK_DD2A2B5E22DB1917 FOREIGN KEY (newsletter_id) REFERENCES newsletter (id)');
        $this->addSql('ALTER TABLE newsletter_stats ADD CONSTRAINT FK_DD2A2B5E7808B1AD FOREIGN KEY (subscriber_id) REFERENCES subscriber (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE newsletter_stats DROP FOREIGN KEY FK_DD2A2B5E22DB1917');
        $this->addSql('ALTER TABLE newsletter_stats DROP FOREIGN KEY FK_DD2A2B5E7808B1AD');
        $this->addSql('DROP TABLE newsletter_stats');
    }
}
