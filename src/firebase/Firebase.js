// Import the functions you need from the SDKs you need
import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAkLC4wtL7QHoDsCZE9tmZCbMNo2sxLIY",
  authDomain: "user-info-file.firebaseapp.com",
  projectId: "user-info-file",
  storageBucket: "user-info-file.appspot.com",
  messagingSenderId: "757829311316",
  appId: "1:757829311316:web:43755aa070d098481e86c1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
// export default database;
