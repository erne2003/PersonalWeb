import React from "react";
import { Link } from "react-router-dom";
import "../styles/Landing.css";

export default function Landing() {
  return (
    <main className="landing-page-container">

      <section className="landing-hero-section">

        <div className="landing-hero-left">

          <p className="landing-hero-intro">
            Aspiring Software Developer • Computer Science Student
          </p>

          <h1 className="landing-hero-title">
            Building the skills and solutions to lead the future
          </h1>

          <p className="landing-hero-description">
            I'm Ernesto Cardoso, a Computer Science student at Florida
            International University focused on full-stack development,
            practical mobile applications, and integration of technology to daily life
          </p>

          <div className="landing-hero-buttons">

            <Link to="/projects" className="landing-projects-button">
              View Projects
            </Link>

            <Link to="/contact" className="landing-contact-button">
              Contact Me
            </Link>

          </div>

        </div>

        <div className="landing-hero-right">

          <div className="landing-highlight-card">

            <h2 className="landing-highlight-title">
              Current Focus
            </h2>

            <p className="landing-highlight-description">
              
              Currently getting my Expense Tracker App ready for production and deployment
            </p>

          </div>

        </div>

      </section>


      <section className="landing-overview-section">

        <h2 className="landing-overview-title">
          What I Do
        </h2>

        <div className="landing-overview-grid">

          <div className="landing-overview-card">
            <h3>Full-Stack Development</h3>
            <p>
              Building web applications that connect user interfaces,
              backend services, and real-world functionality.
            </p>
          </div>

          <div className="landing-overview-card">
            <h3>Mobile App Development</h3>
            <p>
              Developing mobile apps with React Native focused on real
              product experiences.
            </p>
          </div>

          <div className="landing-overview-card">
            <h3>Product-Driven Thinking</h3>
            <p>
              I approach development as product design, not just code.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}