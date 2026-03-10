import React from "react";
import "../styles/TechStack.css";

export default function TechStack() {

  return (
    <main className="techstack-page-container">

      <section className="techstack-header-section">

        <h1 className="techstack-header-title">
          Tech Stack
        </h1>

      </section>


      <section className="techstack-grid-section">

        <div className="techstack-frontend-card">

          <h2>Frontend</h2>

          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>

        </div>


        <div className="techstack-backend-card">

          <h2>Backend</h2>

          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>REST APIs</li>
          </ul>

        </div>


        <div className="techstack-database-card">

          <h2>Database</h2>

          <ul>
            <li>SQL</li>
            <li>PostgreSQL</li>
            <li>Firebase</li>
          </ul>

        </div>

      </section>

    </main>
  );
}