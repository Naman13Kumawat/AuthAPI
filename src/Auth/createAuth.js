import app from "./firebaseConfig";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(app);
export default function signup(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert(`Email: ${user.email} user successfully created.`);
    })
    .catch((error) => {
      alert(`Status: ${error.code} \n${error.message}`);
    });
}
