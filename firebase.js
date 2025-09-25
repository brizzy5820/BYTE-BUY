// Import the functions you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Your Firebase config (copy from Firebase console)
const firebaseConfig = {
    apiKey: "AIzaSyByNiud6xGiCo7_7SDzdeQ8Ij2_h5P_RFs",
    authDomain: "bytebuy-app-546b1.firebaseapp.com",
    projectId: "bytebuy-app-546b1",
    storageBucket: "bytebuy-app-546b1.appspot.com",
    messagingSenderId: "604573096583",
    appId: "1:604573096583:web:ac924bd0d28c71f30df622"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

// Export for use in other files
export const auth = getAuth(app);
export const db = getFirestore(app);
