// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVarKzpry_igutNkBqfgcblXVkIih_WfU",
  authDomain: "tintavirtual-24c1c.firebaseapp.com",
  projectId: "tintavirtual-24c1c",
  storageBucket: "tintavirtual-24c1c.appspot.com",
  messagingSenderId: "518938780051",
  appId: "1:518938780051:web:737256dc823337307b8866",
  measurementId: "G-6SDE2B6BZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore( app )