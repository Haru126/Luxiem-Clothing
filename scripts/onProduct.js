document.addEventListener("DOMContentLoaded", () => {
    const products = document.querySelectorAll('.grid-item');
    const modal = document.getElementById("productModal");
    const modalProductName = document.getElementById("modalProductName");
    const modalProductDescription = document.getElementById("modalProductDescription");
    const modalProductImage = document.getElementById("modalProductImage");

    products.forEach(item => {
        const productImage = item.querySelector('.product');
        const productNameElement = item.querySelector('.productName');

        productImage.addEventListener('click', () => {
            if (productNameElement) {
                const productName = productNameElement.textContent;
                modalProductName.textContent = productName;
                modalProductDescription.textContent = "This is the description for " + productName + ".";
                modalProductImage.src = productImage.src;  
                modal.style.display = "block";
            } else {
                console.error("Product name element not found.");
            }
        });
    });

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});