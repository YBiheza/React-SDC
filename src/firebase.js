// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdoIDujKIz1UnKgxK_kOAFCIakdYvMMJA",
  authDomain: "react-food-delivery-31740.firebaseapp.com",
  projectId: "react-food-delivery-31740",
  storageBucket: "react-food-delivery-31740.appspot.com",
  messagingSenderId: "462893514134",
  appId: "1:462893514134:web:a5e28eea761c02394371b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

