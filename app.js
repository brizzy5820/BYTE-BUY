// app.js (or any .js file linked to your HTML)
function test(){
  alert('welcome')
}
test()
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail  
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";


//  Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByNiud6xGiCo7_7SDzdeQ8Ij2_h5P_RFs",
  authDomain: "bytebuy-app-546b1.firebaseapp.com",
  projectId: "bytebuy-app-546b1",
  storageBucket: "bytebuy-app-546b1.appspot.com",
  messagingSenderId: "604573096583",
  appId: "1:604573096583:web:ac924bd0d28c71f30df622"

}
;console.log(firebaseConfig);

//  Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
  
//  Handle sign-up
window.signUpUser = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const output = document.getElementById("message")

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Signup successful!");
      message
      // console.log("User:", userCredential.user);
      // Optionally, redirect or perform other actions after signup
      window.location.href = "login.html"; // Redirect to login.html after signup
    })
   .catch((error) => {
  alert("Error: " + error.message);
  console.log(error); // Inspect full error in browser console
});

};


//  Login functionality

// Login function
window.loginUser = function () {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  const welcome= document.getElementById("message");

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!");
      console.log("User:", userCredential.user);
      welcome.innerHTML += `<p>Welcome, ${userCredential.user.email}</p>`;
       setTimeout(() => {
        window.location.href = "homepage.html";
      }, 2500);

    })
    .catch((error) => {
      alert("Login failed: Please check your login details"+ "\n" + error.message);
    });
};

//  Password Reset Function
window.resetPassword = function () {
  const email = document.getElementById("reset-email").value;
  const message = document.getElementById("resetMessage");

  sendPasswordResetEmail(auth, email)
    .then(() => {
      message.innerText = "Reset email sent! Check your inbox.";
      message.style.color = "lightgreen";
    })
    .catch((error) => {
      message.innerText = "Error: " + error.message;
      message.style.color = "red";
    });
};
// Toggle Functions
window.showResetForm = function () {
  document.getElementById("loginFormContainer").style.display = "none";
  document.getElementById("resetFormContainer").style.display = "block";
};

window.showLoginForm = function () {
  document.getElementById("resetFormContainer").style.display = "none";
  document.getElementById("loginFormContainer").style.display = "block";
};