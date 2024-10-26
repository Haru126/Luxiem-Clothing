document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("userModal");
    const user = document.querySelector(".signreg");
    const signreg = document.querySelector(".signreg");

    if(signreg.textContent == "Sign in / Register"){
        user.addEventListener('click', function() {
            modal.style.display = 'block';
        });
    
        modal.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    }
});