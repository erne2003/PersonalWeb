import React from "react";
import "../styles/Resume.css";

export default function Resume() {

  return (
    <main className="resume-page-container">

      <section className="resume-header-section">

        <h1 className="resume-header-title">
          Resume
        </h1>

      </section>


      <section className="resume-education-section">

        <div className="resume-education-card">

          <h2>Education</h2>

          <p>Florida International University</p>
          <p>Bachelor of Science in Computer Science</p>

        </div>

      </section>


      <section className="resume-experience-section">

        <div className="resume-experience-card">

          <h2>Experience</h2>

          <p>
            While studying Computer Science, I have focused on building
            practical software projects including web applications,
            mobile applications, and financial tools.
          </p>

        </div>

      </section>


      <section className="resume-download-section">

        <button className="resume-download-button">
          Download Resume
        </button>

      </section>

    </main>
  );
}