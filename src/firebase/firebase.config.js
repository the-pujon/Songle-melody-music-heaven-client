// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGL2AmjwfLSu87luIhABIe_wF5fHMj0G4",
  authDomain: "songle-melody.firebaseapp.com",
  projectId: "songle-melody",
  storageBucket: "songle-melody.appspot.com",
  messagingSenderId: "250671083480",
  appId: "1:250671083480:web:f894b57c9605de96d14cad",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
