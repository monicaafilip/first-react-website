import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config =  {
    apiKey: "AIzaSyBnmf7Vh6LjBkJjMI0caSt1iry8gU4ZORY",
    authDomain: "e-commerce-site-93513.firebaseapp.com",
    projectId: "e-commerce-site-93513",
    storageBucket: "e-commerce-site-93513.appspot.com",
    messagingSenderId: "122267777302",
    appId: "1:122267777302:web:54eed46c2d495e88ecb837",
    measurementId: "G-GS22GYWC55"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) 
    {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        console.log(displayName);
        try {
            await userRef.set({
                displayName, 
                email,
                createdAt,
                ...additionalData
            })
        }catch (error) {
            console.log('error creating user', error.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;