// Help Page Interactions
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("submitTicketBtn").addEventListener("click", () => {
        const issue = document.getElementById("issueInput").value;
        if (issue) {
            alert("Ticket submitted: " + issue);
            // Logic for submitting help ticket
        } else {
            alert("Please describe your issue.");
        }
    });
});