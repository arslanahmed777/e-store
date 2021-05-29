import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDifB0aTArEvlxF54MEjfi1V7surJt-v1s",
  authDomain: "e-store-1d529.firebaseapp.com",
  projectId: "e-store-1d529",
  storageBucket: "e-store-1d529.appspot.com",
  messagingSenderId: "114292081218",
  appId: "1:114292081218:web:f578a3258ad4b1dd3ae3db",
  measurementId: "G-LZ6N8RJVG0",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating usesr");
    }
  }
  return userRef;
};

export const addCollection = (collectionName, items) => {
  const collectionRef = firestore.collection(collectionName);
  collectionRef.add(items);
  console.log("collection red", collectionRef);
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// google authentication utility code
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
