// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyD4nhnuDRoSND-UwNJxdbMjvcAo_oRspig',
  authDomain: 'estrela-rap.firebaseapp.com',
  projectId: 'estrela-rap',
  storageBucket: 'estrela-rap.appspot.com',
  messagingSenderId: '788846161168',
  appId: '1:788846161168:web:358487b4d212a6f4748995',
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
