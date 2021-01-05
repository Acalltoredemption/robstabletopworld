import firebase from "firebase/app";
import 'firebase/firestore';


  var firebaseConfig = {
    apiKey: "AIzaSyCXkt08M0uJWxJHy7JhhiVanIm2iqyMzvk",
    authDomain: "robs-tabletop-world.firebaseapp.com",
    projectId: "robs-tabletop-world",
    storageBucket: "robs-tabletop-world.appspot.com",
    messagingSenderId: "272819274914",
    appId: "1:272819274914:web:268f9eb9ed56d52d1ec3fb",
    measurementId: "G-MSBBVFXXDP"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  db.settings({ timestampsInSnapshots: true})
 

  export default firebase;




