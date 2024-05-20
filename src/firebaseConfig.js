// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// };
const firebaseConfig = {
   apiKey: 'AIzaSyDDq9Kgw4nCg7CzBh18A9Jc8d0Qpg--MYo',
   authDomain: 'kiosk-ordering.firebaseapp.com',
   projectId: 'kiosk-ordering',
   storageBucket: 'kiosk-ordering.appspot.com',
   messagingSenderId: '1011439035578',
   appId: '1:1011439035578:web:102548e3d41a644b3ace83',
   measurementId: 'G-ZKQT9J25PR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
export { app, db };
