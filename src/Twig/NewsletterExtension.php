<?php

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class NewsletterExtension extends AbstractExtension
{
    public function __construct(
        private UrlGeneratorInterface $urlGenerator
    ) {}

    public function getFilters(): array
    {
        return [
            new TwigFilter('track_links', [$this, 'trackLinks']),
        ];
    }

    public function trackLinks(string $content, string $token): string
    {
        return preg_replace_callback(
            '/<a\s+(?:[^>]*?\s+)?href=(["\'])(.*?)\1/',
            function ($matches) use ($token) {
                $url = $matches[2];
                $trackedUrl = $this->urlGenerator->generate('app_newsletter_track_click', [
                    'token' => $token,
                    'url' => base64_encode($url)
                ], UrlGeneratorInterface::ABSOLUTE_URL);
                return str_replace($matches[2], $trackedUrl, $matches[0]);
            },
            $content
        );
    }
} 