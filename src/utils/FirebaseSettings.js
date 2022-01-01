import Rebase from "re-base";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage'; 

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAXR_lbVyiPxc2D39Fp4BqeyFNjtzBuR2g",
    authDomain: "thetkmshowapi.firebaseapp.com",
    databaseURL: "https://thetkmshowapi.firebaseio.com",
    projectId: "thetkmshowapi",
    storageBucket: "thetkmshowapi.appspot.com",
    messagingSenderId: "1086641860835",
    appId: "1:1086641860835:web:3590afeb48780cfc36d5d6",
    measurementId: "G-0P7LRJKL9S"
});

const db = firebase.database(firebaseApp);
const database = firebase.database()
const base = Rebase.createClass(db);
export const storageRef = firebase.storage().ref()
export const providers = {
//   facebook: new firebase.auth.FacebookAuthProvider(),
  google: new firebase.auth.GoogleAuthProvider()
};

export const increment =(value)=>{
  return firebase.database.ServerValue.increment(value)
}

export const auth = firebaseApp.auth();
export const databased = database;
export default base;