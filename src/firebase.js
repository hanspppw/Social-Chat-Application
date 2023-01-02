// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA7qNL6A-ELz9Ra03CFID6pTnA2ztS68F4",
    authDomain: "social-chat-application-c803b.firebaseapp.com",
    databaseURL: "https://social-chat-application-c803b-default-rtdb.firebaseio.com",
    projectId: "social-chat-application-c803b",
    storageBucket: "social-chat-application-c803b.appspot.com",
    messagingSenderId: "200216493847",
    appId: "1:200216493847:web:cdb6e6a28e4ead720d0152",
    measurementId: "G-ZK5KE3YMZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = getDatabase(app);

