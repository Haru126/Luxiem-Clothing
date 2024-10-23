document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("query");

    // Add an event listener for the search bar
    if (searchBar) {
        searchBar.addEventListener("input", () => {
            const searchTerm = searchBar.value.toLowerCase();
            filterItems(searchTerm); // Call filterItems with the search term
        });
    }
});

// This function should be defined in your main script or imported properly
function filterItems(searchTerm) {
    const allDivs = document.querySelectorAll('.grid-item');

    allDivs.forEach(div => {
        const productName = div.querySelector('.productName').textContent.toLowerCase();
        const normalizedProductName = productName.replace(/\s+/g, '').toLowerCase();

        // Check if the product name matches the search term
        if (normalizedProductName.includes(searchTerm.replace(/\s+/g, '').toLowerCase())) {
            div.style.display = "block";  // Show div if it matches the search term
        } else {
            div.style.display = "none";   // Hide div if it doesn't match
        }
    });
}
