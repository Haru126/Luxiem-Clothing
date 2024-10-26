document.addEventListener("DOMContentLoaded", () => {
    const user = document.querySelector(".signreg");
    const signreg = document.querySelector(".signreg");
    const auth = firebase.auth();


    user.addEventListener('click', function() {
        if(signreg.textContent == "Log Out"){
            auth.signOut(auth).then(() => {
                console.log("signed out")
                signreg.innerHTML = "Sign in / Register";
            }).catch((error) => {
    
            });
        }
    });
});