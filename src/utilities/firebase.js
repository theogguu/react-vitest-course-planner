// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { useCallback, useEffect, useState } from 'react';
import { getDatabase, connectDatabaseEmulator, onValue, ref, update } from 'firebase/database';
import { getAuth, connectAuthEmulator, signInWithCredential, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBJnmmhZyzAkeVvt2_0_1C_iaLp_QV5opU",
  authDomain: "react-vitest-app.firebaseapp.com",
  databaseURL: "https://react-vitest-app-default-rtdb.firebaseio.com",
  projectId: "react-vitest-app",
  storageBucket: "react-vitest-app.appspot.com",
  messagingSenderId: "162894181973",
  appId: "1:162894181973:web:a64a6d671d9345449fc6dc",
  measurementId: "G-JSJC7R1L49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => (
    onValue(ref(database, path), (snapshot) => {
     setData( snapshot.val() );
    }, (error) => {
      setError(error);
    })
  ), [ path ]);

  return [ data, error ];
};

const makeResult = (error) => {
  const timestamp = Date.now();
  const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
  const [result, setResult] = useState();
  const updateData = useCallback((value) => {
    update(ref(database, path), value)
    .then(() => setResult(makeResult()))
    .catch((error) => setResult(makeResult(error)))
  }, [database, path]);

  return [updateData, result];
};

// google auth
export const signInWithGoogle = () => {
  signInWithPopup(getAuth(app), new GoogleAuthProvider());
};

const firebaseSignOut = () => signOut(getAuth(app));

export { firebaseSignOut as signOut };

export const useAuthState = () => {
  const [user, setUser] = useState();
  
  useEffect(() => (
    onAuthStateChanged(getAuth(app), setUser)
  ), []);

  return [user];
};

// EMULATION: commented out for deployment
const REACT_APP_EMULATE = false;
if (!globalThis.EMULATION && import.meta.env.MODE === 'development' && REACT_APP_EMULATE) {
  connectAuthEmulator(auth, "http://127.0.0.1:9099");
  connectDatabaseEmulator(database, "127.0.0.1", 9000);

signInWithCredential(auth, GoogleAuthProvider.credential(
  '{"sub": "qEvli4msW0eDz5mSVO6j3W7i8w1k", "email": "test1@gmail.com", "displayName":"test1", "email_verified": true}'
));

// set flag to avoid connecting twice, e.g., because of an editor hot-reload
globalThis.EMULATION = true;
}