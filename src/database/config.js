import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCAShvZjDMIV3xn8BD84ZtsrcIKBs7L6jo",
    authDomain: "photowall-88824.firebaseapp.com",
    databaseURL: "https://photowall-88824-default-rtdb.firebaseio.com",
    projectId: "photowall-88824",
    storageBucket: "photowall-88824.appspot.com",
    messagingSenderId: "10677419772",
    appId: "1:10677419772:web:a8ea8a1be63f87f07b2179",
    measurementId: "G-M6LVDMZQ0J"
  };

  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
const database = firebase.database()

export {database}