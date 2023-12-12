import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore, collection, query, orderBy } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB3a2BvLv9qFSLgErbnzxnP2Xg7j4nIO2Y',
  authDomain: 'kr-portfolio-9c50e.firebaseapp.com',
  projectId: 'kr-portfolio-9c50e',
  storageBucket: 'kr-portfolio-9c50e.appspot.com',
  messagingSenderId: '74409407950',
  appId: '1:74409407950:web:7a63f4ebabe3f5b178279f',
};

// init firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage(app);
// init services
export const db = getFirestore();
// references
export const postsRef = collection(db, 'posts');

// reference queries
export const postsRefQuery = query(
  collection(db, 'posts'),
  orderBy('createdAt', 'desc')
);
