
import {initializeApp} from 'firebase/app';
import {getStorage} from "firebase/storage"
// Replace with your Firebase project's configuration
const firebaseConfig = {
    apiKey: "AIzaSyCiPSt65zrgiCaDO2XvUcCtzHtK0kzKNLU",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const storage = getStorage(app)
