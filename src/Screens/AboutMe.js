import React from "react";
import "../styles/AboutMe.css";

export default function AboutMe() {

  return (
    <main className="about-page-container">

      <section className="about-header-section">

        <h1 className="about-header-title">
          About Me
        </h1>

        <p className="about-header-description">
          I'm a Computer Science student focused on building practical,
          real-world software.
        </p>

      </section>


      <section className="about-content-section">

        <div className="about-background-card">

          <h2>Background</h2>

          <p>
            I'm Ernesto Cardoso, currently studying Computer Science at
            Florida International University. My focus is on building
            practical applications using modern technologies like React,
            Node.js, and mobile development frameworks.
          </p>

        </div>


        <div className="about-focus-card">

          <h2 style={{fontSize:20, display:"flex", justifyContent:"center", paddingBottom:20}}>Current Passion/Strengths</h2>

          <ul className="about-focus-list">

            <li>Full-stack web development</li>
            <li>Mobile application development</li>
            <li>Financial technology applications</li>
            <li>Clean UI and product-focused design</li>

          </ul>

        </div>

        

      </section>


      <section className="about-highlights-section">

        <div className="about-highlight-card">
          <h3>Education</h3>
          <p>Florida International University</p>
          <p>B.S. Computer Science</p>
        </div>

        <div className="about-highlight-card">
          <h3>Location</h3>
          <p>Miami, Florida</p>
        </div>

        <div className="about-highlight-card">
          <h3>Interests</h3>
          <p>Software Engineering • Fintech • Mobile Apps</p>
        </div>

      </section>

    </main>
  );
}