import firebase from 'firebase/app';
import 'firebase/firestore'; // If using Firebase database
import 'firebase/storage';
import 'firebase/analytics';
import 'firebase/auth'

let firebaseConfig;
if ([
  'miday-64911.web.app',
  'miday-64911.web.app-production.firebaseap.com',
  'miday-64911.web.app-production.firebaseapp.com'
]
  .includes(window.location.hostname)) {
  firebaseConfig = {
    apiKey: "AIzaSyDZiEmoglVQSYu4KQ0Epu4-UbrOy67ghEk",
    authDomain: "miday-64911.firebaseapp.com",
    projectId: "miday-64911",
    storageBucket: "miday-64911.appspot.com",
    messagingSenderId: "12864193326",
    appId: "1:12864193326:web:e0dc0abc0dd325456ab0bf",
    measurementId: "G-MEGJW2MB3H"
 
  };
} else {
  firebaseConfig = {
    apiKey: "AIzaSyDZiEmoglVQSYu4KQ0Epu4-UbrOy67ghEk",
  authDomain: "miday-64911.firebaseapp.com",
  projectId: "miday-64911",
  storageBucket: "miday-64911.appspot.com",
  messagingSenderId: "12864193326",
  appId: "1:12864193326:web:e0dc0abc0dd325456ab0bf",
  measurementId: "G-MEGJW2MB3H"
  };
}



// Initialize Firebase
export const firebaseInstance = firebase.initializeApp(firebaseConfig);
firebase.analytics();


// Get a Firestore instance
export const db = firebase.firestore();
export const projectAuth = firebase.auth();


//   // timestamps
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
// firestore.settings({ timestampsInSnapshots: true })

// export default firestore
// firebase.firestore.setLogLevel('debug');

// if (window.location.hostname === "localhost") {
//   console.log("localhost detected!");
//   db.settings({
//     host: "localhost:8080",
//     ssl: false
//   });
// }