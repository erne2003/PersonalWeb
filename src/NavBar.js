import React from "react";
import "../src/NavBar.css";

export default function Navbar() {
  return (
    <nav className="navbar-container">

      <div className="navbar-logo">
        EC
      </div>

      <div className="navbar-links">

        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#stack">Stack</a>
        <a href="#projects">Projects</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>

      </div>

    </nav>
  );
}