import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  return <div className="navbar">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/signup">Signup</Link></li>
    </ul>
  </div>;
}
