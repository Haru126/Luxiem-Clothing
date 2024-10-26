document.addEventListener("DOMContentLoaded", () => {
  const signreg = document.querySelector(".signreg");
  const emailInput = document.querySelector(".email");
  const passInput = document.querySelector(".password");
  const signInButton = document.querySelector(".signin");
  const signInError = document.querySelector(".green");
  const modal = document.getElementById("userModal");
  const auth = firebase.auth();

  // Set persistence
  auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
          // Check if the user is signed in on page load
          auth.onAuthStateChanged(user => {
              if (user) {
                  signreg.textContent = "Log Out";
              } else {
                  signreg.textContent = "Sign in / Register";
              }
          });

          // Sign in logic
          signInButton.addEventListener('click', function () {
              const email = emailInput.value;
              const password = passInput.value;

              auth.signInWithEmailAndPassword(email, password)
                  .then((userCredential) => {
                      console.log("User signed in:", userCredential.user);
                      modal.style.display = "none";
                      signreg.textContent = "Log Out"; // Update button text
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
});
