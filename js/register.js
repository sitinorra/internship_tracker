document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('regName').value;
    const password = document.getElementById('regPassword').value;
    const confirm = document.getElementById('confirmPassword').value;
    const feedbackBox = document.getElementById('feedback-box');

    // Alert the system about success or not
    feedbackBox.classList.add('d-none');
    feedbackBox.classList.remove('alert-danger', 'alert-success');

    // Check if passwords match
    if (password !== confirm) {
        feedbackBox.textContent = "Error: Passwords do not match!";
        feedbackBox.classList.add('alert-danger');
        feedbackBox.classList.remove('d-none');
        return;
    }

    // Success Registration
    feedbackBox.textContent = `Success! Account created for ${name}. Redirecting to login...`;
    feedbackBox.classList.add('alert-success');
    feedbackBox.classList.remove('d-none');

    // Wait 2 seconds then go to Login page
    setTimeout(() => {
        window.location.href = "index.html";
    }, 2000);
});
