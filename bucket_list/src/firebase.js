import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    //config 정보
    apiKey: "AIzaSyCOzG8bcgU3Su7W9a8O20JmqoHtG0aD3XM",
    authDomain: "sparta-react-4d6ec.firebaseapp.com",
    projectId: "sparta-react-4d6ec",
    storageBucket: "sparta-react-4d6ec.appspot.com",
    messagingSenderId: "909482031554",
    appId: "1:909482031554:web:29c6526fba69be9d53be5b",
    measurementId: "G-5JXHZQCCZX"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };