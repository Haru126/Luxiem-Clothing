document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("userModal");
    const user = document.querySelector(".signreg");

    user.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    modal.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});