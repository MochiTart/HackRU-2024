import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
  return (
    <div id="navbar">
      <Link to="/" id="navbar a"> Home </Link>
      <Link to="/login" id="navbar a"> Login </Link>
      <Link to="/profile" id="navbar a"> Profile </Link>
    </div>
  );
}
