import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBmcJAXF3K3grKgY9WhLscTQNdOlO8Gotk',
  authDomain: 'financial-tracker-4716c.firebaseapp.com',
  projectId: 'financial-tracker-4716c',
  storageBucket: 'financial-tracker-4716c.appspot.com',
  messagingSenderId: '600663245892',
  appId: '1:600663245892:web:2c9b996f9078aee0bb6811',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//	Init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//	timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectAuth, projectFirestore, timestamp };
