document.addEventListener("DOMContentLoaded", () => {
    const products = document.querySelectorAll('.grid-item');
    const modal = document.getElementById("productModal");
    const modalProductName = document.getElementById("modalProductName");
    const modalProductDescription = document.getElementById("modalProductDescription");
    const modalProductImage = document.getElementById("modalProductImage");
    const modalProductPrice = document.getElementById("modalProductPrice");
    

    products.forEach(item => {
        const productImage = item.querySelector('.product');
        const productNameElement = item.querySelector('.productName');
        const productPriceElement = item.querySelector('.productPrice')

        productImage.addEventListener('click', () => {
            if (productNameElement) {
                const productName = productNameElement.textContent;
                const productPrice = productPriceElement.textContent;
                modalProductName.textContent = productName;
                modalProductPrice.textContent = productPrice;
                modalProductDescription.textContent = "This is the description for " + productName + ".";
                modalProductImage.src = productImage.src;  
                modal.style.display = "block";
            } else {
                console.error("Product name element not found.");
            }
        });
    });

    modal.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});