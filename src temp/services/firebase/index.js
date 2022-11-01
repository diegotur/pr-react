import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAgOzAo8NA_hFgiiXH_K5BXbKYy5vN4Rk8",
    authDomain: "gamefactory-3149a.firebaseapp.com",
    projectId: "gamefactory-3149a",
    storageBucket: "gamefactory-3149a.appspot.com",
    messagingSenderId: "312425038152",
    appId: "1:312425038152:web:1769782cb5894b32a6b37d"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);