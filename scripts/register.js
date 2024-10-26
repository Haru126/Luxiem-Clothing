const firebaseConfig = {
  apiKey: "AIzaSyDpITbv3Ek3GMEQGb6OliIXpuCC1dDPyUI",
  authDomain: "luxiem-clothing.firebaseapp.com",
  projectId: "luxiem-clothing",
  storageBucket: "luxiem-clothing.appspot.com",
  messagingSenderId: "827071274819",
  appId: "1:827071274819:web:6ac8485ed03bbb75ed59f6",
  measurementId: "G-3QH0TLB84C"
};

firebase.initializeApp(firebaseConfig);

const emailInput = document.querySelector(".regemail");
const passInput = document.querySelector(".regpass");
const repassInput = document.querySelector(".retpass");
const auth = firebase.auth();
const reg = document.querySelector(".register");
const textError = document.querySelector(".error");
const userModal = document.getElementById("userModal");
const modal = document.getElementById("registerModal");
const green = document.querySelector(".green");

reg.addEventListener('click', function () {
  if (passInput.value === repassInput.value) {
    textError.textContent = "";
    const email = emailInput.value;
    const password = passInput.value;

    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User signed up:", user);
        return user.sendEmailVerification();
      })
      .then(() => {
        console.log("Verification email sent.");
        modal.style.display = "none";
        userModal.style.display = "block";
        green.textContent = "Please check your email to verify your account.";
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in-use":
            textError.textContent = "Email is already in use.";
            break;
          case "auth/invalid-email":
            textError.textContent = "Invalid email.";
            break;
          case "auth/weak-password":
            textError.textContent = "Weak password.";
            break;
          default:
            textError.textContent = "Something went wrong.";
            console.error(error.message);
        }
      });
  } else {
    textError.textContent = "Passwords do not match.";
  }
});
