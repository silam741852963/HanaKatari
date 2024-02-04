// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDU1sHG15DUpS7iutdLR8JvGGeN99RQE1E",
    authDomain: "hanakatari-f16c0.firebaseapp.com",
    projectId: "hanakatari-f16c0",
    storageBucket: "hanakatari-f16c0.appspot.com",
    messagingSenderId: "524783595761",
    appId: "1:524783595761:web:dafa31da02d6d8063fb950",
    measurementId: "G-EHYJ4W6QTN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
