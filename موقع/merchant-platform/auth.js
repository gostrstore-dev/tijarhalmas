// Authentication logic placeholder
// This script will handle login functionality

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Placeholder authentication logic
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password.');
    }
});