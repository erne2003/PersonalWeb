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

          <h2 style={{marginBottom:35}}>Education</h2>

          <p>Florida International University</p>
          <p>Bachelor of Science in Computer Science</p>
          <p>2024 – Present</p>

          <br />

          <p>Miami Dade College</p>
          <p>Associate of Arts in Computer Science</p>
          <p>2022 – 2024</p>

          <br />

          

          

        </div>
        <div className="resume-education-card">
          <h3 style={{marginBottom:35}}>Relevant Coursework</h3>
          <ul className="resume-coursework-list" style={{marginInline:10}}> 

            <li>Data Structures</li>
            <li>Systems Programming</li>
            <li>Computer Architecture</li>
            <li>Artificial Intelligence</li>
            <li>Programming I</li>
            <li>Programming II</li>
            <li>Calculus I</li>
            <li>Calculus II</li>
            <li>Statistics for Computer Science Majors</li>

          </ul>
        </div>

      </section>


      <section className="resume-experience-section">

  <div className="resume-experience-card">

    <h2 style={{marginBottom:35}}>Experience</h2>

    <h3>Open Source Contributor</h3>
    <p>Baserow</p>

    <ul className="resume-experience-list">

      <li style={{ marginBottom: "10px" }}>
        Contributed to the open-source project Baserow by working with an existing production-level codebase.
      </li>

      <li style={{ marginBottom: "10px" }}>
        Gained experience reading, understanding, and modifying code within a collaborative development environment.
      </li>

      <li style={{ marginBottom: "10px" }}>
        Strengthened practical skills in software development workflows, including debugging, code organization, and contributing to shared projects.
      </li>

      <li style={{ marginBottom: "10px" }}>
        Built hands-on experience with real-world development standards beyond academic coursework and personal projects.
      </li>

    </ul>


  </div>

</section>


      <section className="resume-download-section">

        <button
        className="resume-download-button"
        onClick={() => window.open("/Resume_Ernesto_Cardoso.pdf", "_blank")}
        >
  Download Resume
</button>

      </section>

    </main>
  );
}