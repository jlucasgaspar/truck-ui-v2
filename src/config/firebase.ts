import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';

let firebaseConfig = {};

const MODE = process.env.REACT_APP_MODE;

if (MODE === 'DEV') {
    firebaseConfig = {
        apiKey: process.env.REACT_APP_FIREBASE_API_KEY_DEV as string,
        authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN_DEV as string,
        projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID_DEV as string,
        messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID_DEV as string,
        appId: process.env.REACT_APP_FIREBASE_APP_ID_DEV as string,
        storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET_DEV as string,
    } as object;
} else if (MODE === 'PROD') {
    firebaseConfig = {
        apiKey: process.env.REACT_APP_FIREBASE_API_KEY_PROD as string,
        authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN_PROD as string,
        projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID_PROD as string,
        messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID_PROD as string,
        appId: process.env.REACT_APP_FIREBASE_APP_ID_PROD as string,
        storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET_PROD as string,
    } as object;
}

firebase.initializeApp(firebaseConfig);
firebase.auth().languageCode = 'pt-br';
export const firebaseAuth = firebase.auth();
export const storage = firebase.storage();