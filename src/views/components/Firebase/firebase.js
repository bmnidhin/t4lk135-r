import app from 'firebase/app';


const config = {
    apiKey: "AIzaSyAXXon5K0tYbKk-sQVQ1d_-9zz9L0l7SIE",
    authDomain: "jetgreen-98863.firebaseapp.com",
    databaseURL: "https://jetgreen-98863.firebaseio.com",
    projectId: "jetgreen-98863",
    storageBucket: "jetgreen-98863.appspot.com",
    messagingSenderId: "1000962137414",
    appId: "1:1000962137414:web:e1066ee9a73aa6e9311947",
    measurementId: "G-L7W724B5XE"
  };
  class Firebase {
    constructor() {
      app.initializeApp(config);
    }
  }
   
  export default Firebase;