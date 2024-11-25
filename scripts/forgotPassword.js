document.addEventListener("DOMContentLoaded", () => {
    const forgotPasswordButton = document.querySelector(".forgotPassword");
    const emailInput = document.querySelector(".forgotEmail");
    const resetError = document.querySelector(".resetError");
    const resetSuccess = document.querySelector(".resetSuccess");
    const auth = firebase.auth();
    const forgotText = document.querySelector(".forgotpassword");
    const modal = document.getElementById("userModal");
    const forgorpass = document.getElementById("fpModal");

    forgotText.addEventListener('click', () => {
        modal.style.display = "none";
        forgorpass.style.display = "block";
        console.log("mamamo");
    })
  
    forgotPasswordButton.addEventListener("click", () => {
      const email = emailInput.value;
      resetError.textContent = "";
      resetSuccess.textContent = "";

      if (!email) {
        resetError.textContent = "Please enter your email address.";
        return;
      }
  
      auth.sendPasswordResetEmail(email)
        .then(() => {
          resetSuccess.textContent = "Password reset email sent! Check your inbox.";
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/invalid-email":
              resetError.textContent = "Invalid email address.";
              break;
            case "auth/user-not-found":
              resetError.textContent = "No user found with this email.";
              break;
            default:
              resetError.textContent = "Something went wrong. Please try again.";
              console.error(error.message);
          }
        });
    });
  
    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 13 && document.querySelector("#forgotPasswordModal").style.display === "block") {
        forgotPasswordButton.click();
      }
    });
  });
  