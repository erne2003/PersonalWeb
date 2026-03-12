import React from "react";
import "../styles/Footer.css";

export default function Footer() {

  return (
    <footer className="footer-container">

      <div className="footer-left-section">

        <h3 className="footer-name">
          Ernesto Cardoso
        </h3>

        <p className="footer-description">
          Software Developer Portfolio
        </p>

      </div>


      <div className="footer-right-section">

        <p className="footer-location">
          Miami, Florida
        </p>

        <p className="footer-stack">
          React • Node • Mobile Apps • JavaScript • Java • SQL
        </p>

      </div>

    </footer>
  );
}