import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {getFirestore} from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1BhH08e8muvgxBqk9o7ukTjr0HcZ1G3g",
  authDomain: "wrdding-app-react.firebaseapp.com",
  projectId: "wrdding-app-react",
  storageBucket: "wrdding-app-react.appspot.com",
  messagingSenderId: "4209123348",
  appId: "1:4209123348:web:27f224dfdd86b40219c701"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export default database;