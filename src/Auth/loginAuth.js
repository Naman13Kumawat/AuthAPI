import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "./firebaseConfig";

const auth = getAuth(app);

export default function login(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert(`Email: ${user.email} successfully logged in.`);
    })
    .catch((error) => {
      alert(`Status: ${error.code} \n${error.message}`);
    });
}
