import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDixdjDjjFqcBy8JMwxdbThLRcfhy_F6wU",
    authDomain: "friend-test-ee215.firebaseapp.com",
    projectId: "friend-test-ee215",
    storageBucket: "friend-test-ee215.appspot.com",
    messagingSenderId: "46940115463",
    appId: "1:46940115463:web:8f1d33562b99b49a1590a2",
    measurementId: "G-VLQJR8XPML"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export {firestore};