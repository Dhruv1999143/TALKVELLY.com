document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("searchBtn").addEventListener("click", () => {
        const query = document.getElementById("searchInput").value;
        if(query) {
            fetch(`/api/search?query=${encodeURIComponent(query)}`)
            .then(response => response.json())
            .then(data => {
                // Dynamically display search results
                const resultsContainer = document.getElementById("searchResults");
                resultsContainer.innerHTML = ""; // Clear previous results
                data.results.forEach(result => {
                    const resultDiv = document.createElement("div");
                    resultDiv.textContent = result.name;
                    resultsContainer.appendChild(resultDiv);
                });
            })
            .catch(error => console.error("Error during search:", error));
        } else {
            alert("Please enter a search term.");
        }
    });
});