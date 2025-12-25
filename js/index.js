document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const errorBox = document.getElementById('error-box');

// Using hardcoded credentials only to login
    if (user === "Sebastian Michaelis" && pass === "Phantomhive") {
        window.location.href = "dashboard.html"; 
    } else {
        errorBox.textContent = "Access Denied: Invalid Credentials";
        errorBox.classList.remove('d-none');
    }
});