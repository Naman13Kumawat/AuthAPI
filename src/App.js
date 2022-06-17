import React from "react";
import "./App.scss"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Landing/Home"
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}