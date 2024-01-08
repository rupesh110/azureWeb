import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAB4vh-6hAEFzmqzi-zwOhPzrvXJhR-pIA",
  authDomain: "azureweb-21b79.firebaseapp.com",
  projectId: "azureweb-21b79",
  storageBucket: "azureweb-21b79.appspot.com",
  messagingSenderId: "196249158273",
  appId: "1:196249158273:web:fe3c9f15e17fc340e34380",
  measurementId: "G-QJ4BKTGH93"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth};
