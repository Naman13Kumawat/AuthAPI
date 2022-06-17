import { useState } from "react";
import "./Login.scss";
import login from "../../Auth/loginAuth";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";


export default function Login() {
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
    login(email, password);
  };

  return (
    <>
    <Navbar />
    <div className="container">
      <h1>Login to your account.</h1>

      <input
        type="text"
        name="email"
        placeholder="Email or phone or username"
        value={email}
        onChange={handleChange}
        required={true}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handleChange}
        required={true}
      />
      <button type="submit" name="login" onClick={handleClick}>
        <Link to="/">Log In</Link>
      </button>

      <p>
        Don't have an account?&nbsp;
        <a href="/signup">Sign up</a>
      </p>
    </div>
    </>
  );
}
