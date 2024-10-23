document.addEventListener("DOMContentLoaded", () => {
    const clothingSelect = document.querySelector(".clothing");

    if (clothingSelect) {
        clothingSelect.addEventListener("change", () => {
            const selectedValue = clothingSelect.value;
            console.log("Selected Value:", selectedValue);
            filterItems(selectedValue);
        });

        // Trigger the filter on the initial load
        filterItems(clothingSelect.value);
    }

    function filterItems(selectedValue) {
        const allDivs = document.querySelectorAll('.grid-item');

        allDivs.forEach(div => {
            const productName = div.querySelector('.productName').textContent.toLowerCase();
            const normalizedProductName = productName.replace(/\s+/g, '').toLowerCase();
            const normalizedSelectedValue = selectedValue.replace(/\s+/g, '').toLowerCase();

            if (normalizedSelectedValue === "all" || normalizedProductName.includes(normalizedSelectedValue)) {
                div.style.display = "block";  // Show div if it matches the selected category
            } else {
                div.style.display = "none";   // Hide div if it doesn't match
            }
        });
    }
    window.filterItems = filterItems;

});
