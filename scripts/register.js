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


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const database = firebase.database();
const emailInput = document.querySelector(".regemail");
const passInput = document.querySelector(".regpass");
const repassInput = document.querySelector(".retpass");
const auth = firebase.auth();
const reg = document.querySelector(".register");
const textError = document.querySelector(".error");

reg.addEventListener('click', function () {
  if (passInput.value === repassInput.value) {
    textError.textContent = "";
    const email = emailInput.value;
    const password = passInput.value;

    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return user.sendEmailVerification().then(() => {
          database.ref('users/' + user.uid).set({ email });
          console.log("Verification email sent and email saved to database.");
        });
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
        }
      });
  } else {
    textError.textContent = "Passwords do not match.";
  }
});
