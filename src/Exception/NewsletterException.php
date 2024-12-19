<?php

namespace App\Exception;

class NewsletterException extends \Exception
{
    public const ERROR_SENDING = 'error.sending';
    public const ERROR_NO_SUBSCRIBERS = 'error.no_subscribers';
    public const ERROR_INVALID_CONTENT = 'error.invalid_content';
} 