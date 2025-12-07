import { auth } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const display = document.getElementById("userName");
const display2 = document.getElementById("userNameMobile");
const logoutBtn = document.getElementById("userReg");
const logoutBtn2 = document.getElementById("userRegII");
// logoutBtn.addEventListener('click',()=>{
//   window.location. href="/" 
// })
// 🔑 Listen for login status
onAuthStateChanged(auth, (user) => {
  if (user) {
    // ✅ User is logged in
    display.innerText = `Hi, ${user.displayName || user.email.split("@")[0]}`;
    display2.innerText = `Hi, ${user.displayName || user.email.split("@")[0]}`;
    logoutBtn.innerHTML='Log Out'
    logoutBtn2.style.display='flex'
      // 🔑 Logout
logoutBtn.addEventListener( 'click', async ()=>{
  await signOut(auth);
  showLogoutNotification()
  // window.location.href = "./Authentication/loginform.html";
}) 
  logoutBtn2.addEventListener( 'click', async ()=>{
  await signOut(auth);
  showLogoutNotification()
  // window.location.href = "./Authentication/loginform.html";
}) 
  }

   else {
    // ❌ No user logged in
    display.innerText = "Account";
    display2.innerText = "Hi, User";
    logoutBtn.innerHTML='Sign In'
    logoutBtn2.style.display='none'
    logoutBtn.onclick = () => window.location.href = "./Authentication/loginform.html";
  }
});
function showLogoutNotification() {
      const notification = document.getElementById('logoutNotification');
      notification.classList.add('show');
      
      // Auto-hide after 4 seconds
      setTimeout(() => {
        hideLogoutNotification();
      }, 4000);
    }

    function hideLogoutNotification() {
      const notification = document.getElementById('logoutNotification');
      notification.classList.remove('show');
    }
// const carts=document.getElementById('cartsPage')
// carts.addEventListener('click',()=>{
//   window.location.href='./BYTE-BUY Help section/javascriptProject/cart.html'
// })
// # Paystack + Firebase Mini Demo

// A compact, copy-paste demo showing a minimal **frontend** (HTML/JS) and **Firebase Cloud Functions** backend to: initialize Paystack transactions, verify them, and update Firestore. Use this for testing and then adapt for production.

// ---

// ## Overview

// Components included:

// * `index.html` — simple frontend that: creates an order, calls backend to initialize transaction, redirects user to Paystack.
// * `functions/index.js` — Firebase Cloud Functions (Express) with three endpoints:

//   * `POST /init` → initialize transaction with Paystack and return authorization URL
//   * `GET /verify?reference=` → verify transaction (used after redirect)
//   * `POST /webhook` → Paystack webhook receiver (verifies signature, updates Firestore)
// * Firestore used for orders collection: `orders/{orderId}`

// **Notes:**

// * Amounts to Paystack are in *kobo* (NGN) or the smallest currency unit — multiply by 100.
// * Store your Paystack secret key in environment (Firebase config) — `PAYSTACK_SECRET_KEY` and `PAYSTACK_WEBHOOK_SECRET`.

// ---

// ## 1) Frontend — `index.html`

// ```html
// <!doctype html>
// <html>
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width,initial-scale=1">
//   <title>Paystack Demo</title>
// </head
// ```
