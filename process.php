<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);
    $captcha = htmlspecialchars($_POST['captcha']);
    $generatedCaptcha = rand(1000, 9999);  // this should match captcha logic on the form page

    // Basic validation
    if ($captcha != $_POST['captcha']) {
        echo "Captcha is incorrect!";
    } else {
        // Process form (store in database, send email, etc.)
        echo "Sign up successful!";
    }
}
?>
