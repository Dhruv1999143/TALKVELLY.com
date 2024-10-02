// Message Page Interactions
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("sendMessageBtn").addEventListener("click", () => {
        const message = document.getElementById("messageInput").value;
        if (message) {
            alert("Message sent: " + message);
            // Logic for sending the message
        } else {
            alert("Please write a message.");
        }
    });
});