// Login Page Interactions
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("loginBtn").addEventListener("click", () => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        if (username && password) {
            alert("Logging in...");
            // Logic for login validation
        } else {
            alert("Please enter username and password.");
        }
    });
});