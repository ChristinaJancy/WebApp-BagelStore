import firebase from 'firebase/app'
import 'firebase/firestore'

//Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAG6ZUJiJTclCzRlPyfeWPvLIa1UhUxCiI",
    authDomain: "bagelstore.firebaseapp.com",
    databaseURL: "https://bagelstore.firebaseio.com",
    projectId: "bagelstore",
    storageBucket: "bagelstore.appspot.com",
    messagingSenderId: "324551223032",
    appId: "1:324551223032:web:90ef277aea9341ceb6bd0d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()
export const dbMenuAdd = db.collection('menuItems');