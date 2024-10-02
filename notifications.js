const socket = new WebSocket("wss://yourserver.com/notifications");

socket.onmessage = function(event) {
    const data = JSON.parse(event.data);
    // Update notification UI in real-time
    const notificationList = document.getElementById("notificationList");
    const notificationItem = document.createElement("li");
    notificationItem.textContent = data.message;
    notificationList.appendChild(notificationItem);
};

socket.onerror = function(error) {
    console.error("WebSocket Error:", error);
};