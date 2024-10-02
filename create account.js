// Create New Account Interactions
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("createAccountBtn").addEventListener("click", () => {
        const username = document.getElementById("newUsername").value;
        const password = document.getElementById("newPassword").value;
        if (username && password) {
            alert("Account created for: " + username);
            // Logic for account creation
        } else {
            alert("Please fill in all fields.");
        }
    });
});