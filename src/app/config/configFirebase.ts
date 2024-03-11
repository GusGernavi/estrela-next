// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD4nhnuDRoSND-UwNJxdbMjvcAo_oRspig',
  authDomain: 'estrela-rap.firebaseapp.com',
  projectId: 'estrela-rap',
  storageBucket: 'estrela-rap.appspot.com',
  messagingSenderId: '788846161168',
  appId: '1:788846161168:web:358487b4d212a6f4748995',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
