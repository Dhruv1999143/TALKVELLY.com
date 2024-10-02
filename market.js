// Marketplace Page Interactions
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("addToCartBtn").addEventListener("click", () => {
        const item = document.getElementById("itemName").value;
        if (item) {
            alert("Item added to cart: " + item);
            // Logic for adding item to cart
        } else {
            alert("Please select an item.");
        }
    });
});