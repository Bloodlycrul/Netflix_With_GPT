// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpxn4YqgaDxAO_tnycSf9X8dV6YADLS68",
  authDomain: "netflix-gpt-41f83.firebaseapp.com",
  projectId: "netflix-gpt-41f83",
  storageBucket: "netflix-gpt-41f83.appspot.com",
  messagingSenderId: "353588133101",
  appId: "1:353588133101:web:1b9e325ef8aa61476be0e4",
  measurementId: "G-3NLCE7LQRC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 // eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);