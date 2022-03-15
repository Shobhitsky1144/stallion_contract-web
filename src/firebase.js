import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCnrgYqMwDBZGOvBLkC1DAAvtw_MRIJsLg",
  authDomain: "stallion-cx.firebaseapp.com",
  projectId: "stallion-cx",
  storageBucket: "stallion-cx.appspot.com",
  messagingSenderId: "788815857333",
  appId: "1:788815857333:web:9989c648e95db159b660fc",
  //   apiKey: process.env.REACT_APP_API_KEY,
  //   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  //   projectId: process.env.REACT_APP_PROJECT_ID,
  //   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  //   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  //   appId: process.env.REACT_APP_API_ID,
});

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

// export const signInWithGoogle = () => {
//   auth
//     .signInWithPopup(googleProvider)
//     .then((res) => {
//       console.log(res.user);
//     })
//     .catch((error) => {
//       console.log(error.message);
//     });
// };
