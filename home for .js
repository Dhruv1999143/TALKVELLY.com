document.addEventListener("DOMContentLoaded", () => {
    // Fetch example for dynamically loading homepage content
    fetch("/api/home-content")
    .then(response => response.json())
    .then(data => {
        document.getElementById("welcomeText").textContent = data.welcomeMessage;
    })
    .catch(error => console.error("Error fetching home content:", error));
});