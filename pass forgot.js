// Forget Password Interactions
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("resetPasswordBtn").addEventListener("click", () => {
        const email = document.getElementById("emailInput").value;
        if (email) {
            alert("Password reset link sent to: " + email);
            // Logic for sending password reset
        } else {
            alert("Please enter your email.");
        }
    });
});