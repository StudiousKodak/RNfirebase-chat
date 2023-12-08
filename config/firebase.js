import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';

// Firebase config
const firebaseConfig = {
    apiKey: Constants.extra.apiKey,
    authDomain: Constants.extra.authDomain,
    projectId: Constants.extra.projectId,
    storageBucket: Constants.extra.storageBucket,
    messagingSenderId: Constants.extra.messagingSenderId,
    appId: Constants.extra.appId,
    databaseURL: Constants.extra.databaseURL  
};

// initialize firebase
initializeApp(firebaseConfig);

export const auth = getAuth();
export const database = getFirestore();
