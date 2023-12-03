import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore'
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbI2mYs27PzZqJgo8Lg2TJpfky6vRgsyc",
  authDomain: "testpool-a3f66.firebaseapp.com",
  projectId: "testpool-a3f66",
  storageBucket: "testpool-a3f66.appspot.com",
  messagingSenderId: "917476666618",
  appId: "1:917476666618:web:4b240f97945037df156d43",
  measurementId: "G-VDX48ZNB94"
};
// init firebase app
const firebaseApp = initializeApp(firebaseConfig);
//init Auth and Analytics
const auth = getAuth(firebaseApp);
const analytics = getAnalytics(firebaseApp);
const gProvider = new GoogleAuthProvider();
const fProvider = new FacebookAuthProvider();
// init firestore services
const firestore = getFirestore();

export { firebaseApp, auth, gProvider, fProvider, analytics, firestore };
