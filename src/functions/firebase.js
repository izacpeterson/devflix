// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc, arrayUnion, getDoc, onSnapshot, arrayRemove, updateDoc } from "firebase/firestore";
import { getMovieDetails } from "./movies";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLC8jtwaCzmE_B2HiJ7NsaBQIQZ4J_1nE",
  authDomain: "mtech-movie.firebaseapp.com",
  projectId: "mtech-movie",
  storageBucket: "mtech-movie.appspot.com",
  messagingSenderId: "246636981233",
  appId: "1:246636981233:web:424cdc799e80177712b250",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export async function googleSignIn() {
  return new Promise((resolve, reject) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(user);
        resolve(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        reject(error);
        // ...
      });
  });
}

export async function signOut() {
  return new Promise((resolve, reject) => {
    auth
      .signOut()
      .then(() => {
        // Sign-out successful.
        window.location.reload();
        resolve();
      })
      .catch((error) => {
        // An error happened.
        reject(error);
      });
  });
}

export async function getUser() {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        resolve(user);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  });
}

export async function isUserSignedIn() {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        resolve(true);
        // ...
      } else {
        // User is signed out
        resolve(false);
        // ...
      }
    });
  });
}

export async function saveFavorite(movieID) {
  const user = auth.currentUser;
  const docRef = doc(db, "favorites", user.uid);

  const docSnap = await getDoc(docRef);
  const favorites = docSnap.data().favorites || [];

  if (favorites.includes(movieID)) {
    await updateDoc(docRef, {
      favorites: arrayRemove(movieID),
    });
  } else {
    await setDoc(
      docRef,
      {
        favorites: arrayUnion(movieID),
      },
      { merge: true }
    );
  }
}

export async function isFavorite(movieID) {
  const user = await getUser();
  const docRef = doc(db, "favorites", user.uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    return data.favorites.includes(movieID);
  } else {
    return false;
  }
}

export async function getFavorites() {
  const user = await getUser();
  const docRef = doc(db, "favorites", user.uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const data = docSnap.data();

    //get movie details for eeach movie id in data.favorites
    data.favorites = data.favorites.map(async (movieID) => {
      let movie = await getMovieDetails(movieID);
      return movie;
    });
    return Promise.all(data.favorites);
  } else {
    return [];
  }
}
