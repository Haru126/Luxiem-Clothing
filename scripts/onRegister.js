document.addEventListener("DOMContentLoaded", () => {
    const userModal = document.getElementById("userModal");

    const modal = document.getElementById("registerModal");
    const user = document.querySelector(".underline");

    user.addEventListener('click', function() {
        userModal.style.display = 'none';
        modal.style.display = 'block';
    });

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});