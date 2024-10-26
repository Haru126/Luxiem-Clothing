document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("query");

    if (searchBar) {
        searchBar.addEventListener("input", () => {
            const searchTerm = searchBar.value.toLowerCase();
            filterItems(searchTerm); 
        });
    }
});

function filterItems(searchTerm) {
    const allDivs = document.querySelectorAll('.grid-item');

    allDivs.forEach(div => {
        const productName = div.querySelector('.productName').textContent.toLowerCase();
        const normalizedProductName = productName.replace(/\s+/g, '').toLowerCase();

        if (normalizedProductName.includes(searchTerm.replace(/\s+/g, '').toLowerCase())) {
            div.style.display = "block";  
        } else {
            div.style.display = "none";  
        }
    });
}
