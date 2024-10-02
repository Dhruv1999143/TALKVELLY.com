// Job Find Page Interactions
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("findJobBtn").addEventListener("click", () => {
        const keyword = document.getElementById("jobKeyword").value;
        if (keyword) {
            alert("Searching jobs for: " + keyword);
            // Logic for job search
        } else {
            alert("Please enter a job keyword.");
        }
    });
});