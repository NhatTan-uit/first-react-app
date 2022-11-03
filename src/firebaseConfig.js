// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIK_mPdCCBd0_X-XuxIjk3sGle3TD8YRQ",
  authDomain: "my-first-react-app-user-file.firebaseapp.com",
  projectId: "my-first-react-app-user-file",
  storageBucket: "my-first-react-app-user-file.appspot.com",
  messagingSenderId: "1068802522330",
  appId: "1:1068802522330:web:f83bc21fc137b5a73bf9e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
export default storage;