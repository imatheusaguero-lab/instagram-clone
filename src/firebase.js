// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhMUPn9FUjr6v-gI1VptUWCp1I1ZyT-ko",
  authDomain: "dankicode-instagram-clone.firebaseapp.com",
  projectId: "dankicode-instagram-clone",
  storageBucket: "dankicode-instagram-clone.firebasestorage.app",
  messagingSenderId: "839185572633",
  appId: "1:839185572633:web:7a8e1250956d3bd3aedb88",
  measurementId: "G-WL97TTR0V6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export {db, auth, storage, analytics};