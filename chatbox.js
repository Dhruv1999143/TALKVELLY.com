// Chat Box Interactions
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("sendChatBtn").addEventListener("click", () => {
        const chatMessage = document.getElementById("chatMessage").value;
        if (chatMessage) {
            alert("Chat message sent: " + chatMessage);
            // Logic for sending chat
        } else {
            alert("Please enter a message.");
        }
    });
});