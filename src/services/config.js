
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
        "AIzaSyCX3cqAuoXciq1OwVtHXWLJ5K9nYvQf8ls"
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "gamestorage-d0700.firebaseapp.com",
    projectId: "gamestorage-d0700",
    storageBucket: "gamestorage-d0700.appspot.com",
    messagingSenderId: "1022290057519",
    appId: "1:1022290057519:web:e90a356f7d92b7aa1269da"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);