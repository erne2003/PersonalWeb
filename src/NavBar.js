import React from "react";
import "../src/NavBar.css";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Navbar() {
  return (
    <nav className="navbar-container">

      <div className="navbar-logo">
        EC
      </div>

      <div className="navbar-links">

        <Link to="/Home"><i class="bi bi-house"></i> </Link> 
        <Link to="/about">About</Link>
        <Link to="/stack">Stack</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>

      </div>

    </nav>
  );
}