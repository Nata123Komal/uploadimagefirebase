import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBUFK3vkVLBO33xVr3ym_eSjdXkfzBdcko",
  authDomain: "chatapp-135ae.firebaseapp.com",
  databaseURL: "https://chatapp-135ae-default-rtdb.firebaseio.com",
  projectId: "chatapp-135ae",
  storageBucket: "chatapp-135ae.appspot.com",
  messagingSenderId: "782882147442",
  appId: "1:782882147442:web:cfb9b04af17fc1625b86eb",
  measurementId: "G-DKHC5TKJ59"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
