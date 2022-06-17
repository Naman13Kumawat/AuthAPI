import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyABT0P6_nMHZwFlPxpOEg7-7mt4sXdYTPs",
  authDomain: "authapi-1eef0.firebaseapp.com",
  projectId: "authapi-1eef0",
  storageBucket: "authapi-1eef0.appspot.com",
  messagingSenderId: "361680353146",
  appId: "1:361680353146:web:70ec9742f1d0f6c48dc8c3"
};

const app = initializeApp(firebaseConfig);

export default app;