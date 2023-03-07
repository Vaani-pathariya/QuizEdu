const firebase=require('firebase')

const  firebaseConfig = {
    apiKey: "AIzaSyB5eYkK0sDEhP7GHflnpqzv2VvT1QIE-94",
    authDomain: "quiz-e29a0.firebaseapp.com",
    databaseURL: "https://quiz-e29a0-default-rtdb.firebaseio.com",
    projectId: "quiz-e29a0",
    storageBucket: "quiz-e29a0.appspot.com",
    messagingSenderId: "1060521512666",
    appId: "1:1060521512666:web:706d97c0b5fcd6ace31fe3",
    measurementId: "G-CFLJ4YDRV1"
  };
firebase.initializeAoo(firebaseConfig)
const db=firebase.firestore()