// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjDq4t1nUk2yfF8blBZhXUpH_QlWTemyQ",
  authDomain: "wave-89f24.firebaseapp.com",
  projectId: "wave-89f24",
  storageBucket: "wave-89f24.appspot.com",
  messagingSenderId: "288472175140",
  appId: "1:288472175140:web:fd9fee714cecbc5802beb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);