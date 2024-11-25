document.addEventListener("DOMContentLoaded", () => {
    const user = document.querySelector(".signreg");
    const signreg = document.querySelector(".signreg");
    const auth = firebase.auth();
    const register = document.querySelector(".green");
    const signInError = document.querySelector(".red");
    const emailInput = document.querySelector(".email");
    const passInput = document.querySelector(".password");


    user.addEventListener('click', function() {
        if(signreg.textContent == "Log Out"){
            auth.signOut(auth).then(() => {
                console.log("signed out")
                signreg.innerHTML = "Sign in / Register";
                register.textContent = "";
                signInError.textContent = "";
                emailInput.value = "";
                passInput.value = "";
            }).catch((error) => {
    
            });
        }
    });

    
});