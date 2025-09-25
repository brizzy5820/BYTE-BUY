import { auth } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
const display = document.getElementById("userName");
const logoutBtn = document.getElementById("userReg");
const zeroItem= document.querySelector('.sec1')
const totalCart= document.querySelector('.totalDisplay')
logoutBtn.addEventListener('click',()=>{
  window.location. href="../BYTEBUY/Authentication/loginform.html" 
})
// const handleClick =()=>{
  
// }

// 🔑 Listen for login status
onAuthStateChanged(auth, (user) => {
  if (user) {
    // ✅ User is logged in
    display.innerText = `Hi, ${user.displayName || user.email.split("@")[0]}`;
    logoutBtn.innerHTML='Log Out'
    zeroItem.style.display='none'
    totalCart.style.display='flex'
      // 🔑 Logout
logoutBtn.addEventListener( 'click', async ()=>{
  await signOut(auth);
  alert("You have been logged out.");
  window.location.href = "./Authentication/loginform.html";
}) 
  }
   else {
    // ❌ No user logged in
    display.innerText = "Account";
    logoutBtn.innerHTML='Sign In'
    zeroItem.style.display='block'
     totalCart.style.display='none'
    logoutBtn.onclick = () => window.location.href = "./Authentication/loginform.html";
  }
});
