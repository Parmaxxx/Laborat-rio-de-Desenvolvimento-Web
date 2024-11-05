// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLTy9Q_YjWuApU83vrLIR2PODqNLREmLU",
  authDomain: "authentication-67166.firebaseapp.com",
  projectId: "authentication-67166",
  storageBucket: "authentication-67166.firebasestorage.app",
  messagingSenderId: "1073464605003",
  appId: "1:1073464605003:web:2eb85e6dc2bfdc671490ce",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);
export { authentication };
