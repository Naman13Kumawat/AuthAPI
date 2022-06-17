import { useState } from "react";
import signup from "../../Auth/createAuth";
import "./Signup.scss";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };
  const handleClick = (e) => {
    signup(email, password);
  };

  return (
    <>
    <Navbar />
    <div className="container">
      <h1>Create Account.</h1>
        <input
          type="text"
          name="email"
          placeholder="Email or phone or username"
          value={email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
          required
        />
        <button type="submit" name="login" onClick={handleClick}>
          <Link to="/">Sign Up</Link>
        </button>
    </div>
    </>
  );
}
