// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi6f40V07BAmqUx8V-w6q0Ckwuht3V6lw",
  authDomain: "clone-231ea.firebaseapp.com",
  projectId: "clone-231ea",
  storageBucket: "clone-231ea.appspot.com",
  messagingSenderId: "179035947369",
  appId: "1:179035947369:web:8c62f0099dc73f4fa43df8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
