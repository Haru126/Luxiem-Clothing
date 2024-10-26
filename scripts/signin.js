const firebaseConfig = {
  apiKey: "AIzaSyDpITbv3Ek3GMEQGb6OliIXpuCC1dDPyUI",
  authDomain: "luxiem-clothing.firebaseapp.com",
  databaseURL: "https://luxiem-clothing-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "luxiem-clothing",
  storageBucket: "luxiem-clothing.appspot.com",
  messagingSenderId: "827071274819",
  appId: "1:827071274819:web:6ac8485ed03bbb75ed59f6",
  measurementId: "G-3QH0TLB84C"
};


firebase.initializeApp(firebaseConfig);

const emailInput = document.querySelector(".email");
const passInput = document.querySelector(".password");
const signInButton = document.querySelector(".signin");
const signInError = document.querySelector(".green");
const modal = document.getElementById("userModal");

signInButton.addEventListener('click', function () {
  const email = emailInput.value;
  const password = passInput.value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user.emailVerified) {
        console.log("User signed in:", user);
        modal.style.display = "none";
      } else {
        signInError.style.color = "red";
        signInError.textContent = "Please verify your email before signing in.";
        firebase.auth().signOut();
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
