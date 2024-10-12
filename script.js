document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    const captchaInput = document.getElementById('captcha').value;
    const captchaValue = document.getElementById('captchaImage').innerText;

    if (password !== confirmPassword) {
        document.getElementById('formMessage').innerText = "Passwords do not match!";
    } else if (captchaInput !== captchaValue) {
        document.getElementById('formMessage').innerText = "Captcha is incorrect!";
    } else {
        document.getElementById('formMessage').innerText = "";
        this.submit();  // Proceed with form submission
    }
});
 