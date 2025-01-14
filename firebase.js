// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiL1t20sIGJ9njfYenmJwk8_RMX-y6IxY",
  authDomain: "plantnurtures.firebaseapp.com",
  projectId: "plantnurtures",
  storageBucket: "plantnurtures.appspot.com",
  messagingSenderId: "326133738116",
  appId: "1:326133738116:web:a112ca52fcd1e86f5f30d1",
  measurementId: "G-FWEB3X3RZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);