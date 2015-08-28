<?php

require __DIR__ . '/vendor/autoload.php';
require __DIR__ . '/config.php';

define('HEADER_INJECTION_PATTERN', '/[\r\n]|Content-Type:|Bcc:|Cc:/i');
define('EMAIL_PATTERN', '/^[^0-9][A-z0-9._%+-]+([.][A-z0-9_]+)*[@][A-z0-9_]+([.][A-z0-9_]+)*[.][A-z]{2,4}$/');

$app = new \Slim\Slim();
$app->response()->header('Content-Type', 'application/json;charset=utf-8');

$app->post('/contact', function () use($app) {
    $body = json_decode($app->request->getBody());

    if ( ! (array_key_exists("name", $body) &&
            array_key_exists("email", $body) &&
            array_key_exists("subject", $body) &&
            array_key_exists("message", $body)) ) {
        $app->halt(403, json_encode(
            array(
                "id" => "missing_fields",
                "message" => "Um ou mais campos estão em branco"
            )
        ));
        return;
    }

    $name    = stripslashes(trim($body->name));
    $email   = stripslashes(trim($body->email));
    $subject = stripslashes(trim($body->subject));
    $message = stripslashes(trim($body->message));

    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        $app->halt(403, json_encode(
            array(
                "id" => "missing_fields",
                "message" => "Um ou mais campos estã em branco"
            )
        ));
        return;
    }

    if ( preg_match(HEADER_INJECTION_PATTERN, $name) ||
         preg_match(HEADER_INJECTION_PATTERN, $email) ||
         preg_match(HEADER_INJECTION_PATTERN, $subject) ||
         preg_match(HEADER_INJECTION_PATTERN, $message) ) {
        $app->halt(403, json_encode(
            array(
                "id" => "invalid_request",
                "message" => "Requisição inválida"
            )
        ));
        return;
    }

    if (!preg_match(EMAIL_PATTERN, $email)) {
        $app->halt(403, json_encode(
            array(
                "id" => "invalid_email_address",
                "message" => "Endereço de email inválido"
            )
        ));
        return;
    }

    $email_subject = "[ENT-CONTATO] $subject";
    $email_body = "Nome: $name <br/> Email: $email <br/> Mensagem: $message";
    $email_headers  = 'MIME-Version: 1.1' . PHP_EOL;
    $email_headers .= 'Content-type: text/html; charset=utf-8' . PHP_EOL;
    $email_headers .= "From: $name <$email>" . PHP_EOL;
    $email_headers .= "Return-Path: " . CONTACT_EMAIL . PHP_EOL;
    $email_headers .= "Reply-To: $email" . PHP_EOL;
    $email_headers .= "X-Mailer: PHP/". phpversion() . PHP_EOL;

    mail(CONTACT_EMAIL, $email_subject, $email_body, $email_headers);

    echo json_encode(
        array(
            "id" => "success",
            "message" => "Mensagem enviada com sucesso."
        )
    );
});

$app->run();

?>
