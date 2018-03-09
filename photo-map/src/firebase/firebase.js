import * as firebase from 'firebase';


// Initialize Firebase
var config = {
  apiKey: "AIzaSyAGKn9uWHafhNzHAlOSId47pLirM51AnuU",
  authDomain: "photo-map-1520054504659.firebaseapp.com",
  databaseURL: "https://photo-map-1520054504659.firebaseio.com",
  projectId: "photo-map-1520054504659",
  storageBucket: "photo-map-1520054504659.appspot.com",
  messagingSenderId: "154016726606"
};

if(!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth
};
