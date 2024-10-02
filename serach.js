// Search Page Interactions
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("searchBtn").addEventListener("click", () => {
        const query = document.getElementById("searchInput").value;
        if(query) {
            alert("Searching for: " + query);
            // Logic for displaying search results
        } else {
            alert("Please enter a search term.");
        }
    });
});