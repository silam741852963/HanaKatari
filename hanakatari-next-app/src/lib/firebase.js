import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDU1sHG15DUpS7iutdLR8JvGGeN99RQE1E",
  authDomain: "hanakatari-f16c0.firebaseapp.com",
  projectId: "hanakatari-f16c0",
  storageBucket: "hanakatari-f16c0.appspot.com",
  messagingSenderId: "524783595761",
  appId: "1:524783595761:web:dafa31da02d6d8063fb950",
  measurementId: "G-EHYJ4W6QTN",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
