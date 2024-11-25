document.addEventListener("DOMContentLoaded", () => {
    const signreg = document.querySelector(".signreg");
    const emailInput = document.querySelector(".email");
    const passInput = document.querySelector(".password");
    const signInButton = document.querySelector(".signin");
    const register = document.querySelector(".green");
    const signInError = document.querySelector(".red");
    const modal = document.getElementById("userModal");
    const auth = firebase.auth();
  
    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
            auth.onAuthStateChanged(user => {
                if (user) {
                    signreg.textContent = "Log Out";
                } else {
                    signreg.textContent = "Sign in / Register";
                }
            });
  
            signInButton.addEventListener('click', function () {
                register.textContent = "";
                signInError.textContent = "";
                const email = emailInput.value;
                const password = passInput.value;
  
                auth.signInWithEmailAndPassword(email, password)
                    .then((userCredential) => {
                        const user = userCredential.user;
  
                        if (user.emailVerified) {
                            console.log("User signed in:", user);
                            modal.style.display = "none";
                            signreg.textContent = "Log Out";
                            register.textContent = "";
                            signInError.textContent = "";
                        } else {
                            auth.signOut().then(() => {
                                signInError.textContent = "Email not verified. Please verify your email before signing in.";
                            });
                        }
                    })
                    .catch((error) => {
                        switch (error.code) {
                            case "auth/user-not-found":
                                signInError.textContent = "No user found with this email.";
                                break;
                            case "auth/wrong-password":
                                signInError.textContent = "Incorrect password.";
                                break;
                            case "auth/invalid-email":
                                signInError.textContent = "Invalid email.";
                                break;
                            case "auth/user-disabled":
                                signInError.textContent = "User account is disabled.";
                                break;
                            default:
                                signInError.textContent = "Something went wrong.";
                                console.error(error.message);
                        }
                    });
            });
  
            const showPassCheckbox = document.querySelector(".showPass");
            showPassCheckbox.addEventListener('change', function () {
                passInput.type = this.checked ? 'text' : 'password';
            });
        });

        document.addEventListener('keydown', function() {
            if (event.keyCode === 13){
                register.textContent = "";
                signInError.textContent = "";
                const email = emailInput.value;
                const password = passInput.value;
  
                auth.signInWithEmailAndPassword(email, password)
                    .then((userCredential) => {
                        const user = userCredential.user;
  
                        if (user.emailVerified) {
                            console.log("User signed in:", user);
                            modal.style.display = "none";
                            signreg.textContent = "Log Out";
                            register.textContent = "";
                            signInError.textContent = "";
                        } else {
                            auth.signOut().then(() => {
                                signInError.textContent = "Email not verified. Please verify your email before signing in.";
                            });
                        }
                    })
                    .catch((error) => {
                        switch (error.code) {
                            case "auth/user-not-found":
                                signInError.textContent = "No user found with this email.";
                                break;
                            case "auth/wrong-password":
                                signInError.textContent = "Incorrect password.";
                                break;
                            case "auth/invalid-email":
                                signInError.textContent = "Invalid email.";
                                break;
                            case "auth/user-disabled":
                                signInError.textContent = "User account is disabled.";
                                break;
                            default:
                                signInError.textContent = "Something went wrong.";
                                console.error(error.message);
                        }
                    });
            }
                
        })
  });
  