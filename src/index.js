// Import Firebase and Firestore using v9 modular
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
   apiKey: 'AIzaSyBHOrXpafW9jJHoQn7-UWySPxxsS1TAcE8',
   authDomain: 'nimble-ninja-js.firebaseapp.com',
   projectId: 'nimble-ninja-js',
   storageBucket: 'nimble-ninja-js.appspot.com',
   messagingSenderId: '669026248863',
   appId: '1:669026248863:web:07c94cf971c791b5f81aaa',
   measurementId: 'G-H9SNQQ5KKG',
};
// Initialize Firebase and Firestore
initializeApp(firebaseConfig);
export const db = getFirestore();

// Initialize modules
import './styles.css';
import App from './scripts/app';

// Class instances
new App();
