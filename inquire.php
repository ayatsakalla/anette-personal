<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $service = htmlspecialchars(trim($_POST['service']));
    $message = htmlspecialchars(trim($_POST['message']));

    if (filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($name) && !empty($service)) {
        $to = "an@anetteanokhin.com";
        $subject = "New Inquiry: " . $service;
        $body = "Name: $name\n";
        $body .= "Email: $email\n";
        $body .= "Service: $service\n";
        $body .= "Message: $message\n";
        $headers = "From: noreply@anetteanokhin.com";

        mail($to, $subject, $body, $headers);

        header("Location: inquiry.html?submitted=success#top");
        exit();
    } else {
        header("Location: inquiry.html?submitted=error#top");
        exit();
    }
}
?>