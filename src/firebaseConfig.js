// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDq9Kgw4nCg7CzBh18A9Jc8d0Qpg--MYo",
  authDomain: "kiosk-ordering.firebaseapp.com",
  projectId: "kiosk-ordering",
  storageBucket: "kiosk-ordering.appspot.com",
  messagingSenderId: "1011439035578",
  appId: "1:1011439035578:web:102548e3d41a644b3ace83",
  measurementId: "G-ZKQT9J25PR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
