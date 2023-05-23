import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyABF37iM9jT0GXi_ody6vD4Rd_NexSK65k',
  authDomain: 'crwn-clothing-db-82675.firebaseapp.com',
  projectId: 'crwn-clothing-db-82675',
  storageBucket: 'crwn-clothing-db-82675.appspot.com',
  messagingSenderId: '993711071620',
  appId: '1:993711071620:web:781c5a1638cf26ab6a7dd1',
};

// initialize the firebase app, creates a representation of your firebase project in js
// allowing you to interact with that project
const firebaseApp = initializeApp(firebaseConfig);

// creates and sets up a 3rd party auth provider allowing us to use
// oAuth2 authentication through the firebase authentication service
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

// retrieves the authentication service associated with your firebase account
// allowing you to carry out all authentication related operations provided by firebase
export const auth = getAuth(firebaseApp);

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore(firebaseApp);

export const createUserDocFromAuth = async userAuth => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  // if user data does not exist
  // create the document with the new data in collection

  // if user data exists
  // return userDocRef

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (err) {
      console.log('error creating user', err);
    }
  }

  console.log(userDocRef);
  return userDocRef;
};
