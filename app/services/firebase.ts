// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChYWCZIOMok6viZ4hZXl2RdfdmEcsX80A",
  authDomain: "my-app-db046.firebaseapp.com",
  projectId: "my-app-db046",
  storageBucket: "my-app-db046.appspot.com",
  messagingSenderId: "881203858787",
  appId: "1:881203858787:web:4efc744a66b17e38759756"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);