<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $to = "an@anetteanokhin.com";
        $subject = "New Newsletter Signup";
        $message = "New subscriber email: " . $email;
        $headers = "From: noreply@anetteanokhin.com";

        mail($to, $subject, $message, $headers);

        header("Location: index.html?subscribed=success#stay-connected");
        exit();
    } else {
        header("Location: index.html?subscribed=error#stay-connected");
        exit();
    }
}
?>