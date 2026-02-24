// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaFFoUOq3aj1IgnzU8uJ2pLJB2Nav8htc",
  authDomain: "weather-app-3951b.firebaseapp.com",
  projectId: "weather-app-3951b",
  storageBucket: "weather-app-3951b.firebasestorage.app",
  messagingSenderId: "351630912116",
  appId: "1:351630912116:web:f3e1f54cd257565154bf21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);