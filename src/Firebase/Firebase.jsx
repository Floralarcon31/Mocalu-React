import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({

    apiKey: "AIzaSyBsdzj7y9noOhcQQ25CuC9l0pe__TxJr2g",
    authDomain: "mocalu-indumentaria.firebaseapp.com",
    projectId: "mocalu-indumentaria",
    storageBucket: "mocalu-indumentaria.appspot.com",
    messagingSenderId: "533917557904",
    appId: "1:533917557904:web:d80c1bd0b2afbaae94e415"
    
  }
);
export function getFirebase(){
    return app;
}
export function getFirestore(){
    return firebase.firestore(app);
}
