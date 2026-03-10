import React from "react";
import "../styles/Projects.css";

export default function Projects() {

  const projects = [
    {
      title: "Expense Tracker",
      description:
        "A budgeting and expense tracking app with transaction insights and category analysis.",
      stack: "React Native, Node.js, Firebase",
    },
    {
      title: "Workout Tracker",
      description:
        "Mobile application to track workouts, sets, and long-term training progress.",
      stack: "React Native",
    },
    {
      title: "Secure File Storage",
      description:
        "Encrypted file storage application concept using authentication and secure upload.",
      stack: "React, Node.js",
    },
  ];

  return (
    <main className="projects-page-container">

      <section className="projects-header-section">

        <h1 className="projects-header-title">
          Projects
        </h1>

        <p className="projects-header-description">
          A selection of projects I've worked on while developing my
          software engineering skills.
        </p>

      </section>


      <section className="projects-grid-section">

        {projects.map((project, index) => (
          <article className="projects-project-card" key={index}>

            <h2 className="projects-project-title">
              {project.title}
            </h2>

            <p className="projects-project-description">
              {project.description}
            </p>

            <p className="projects-project-stack">
              {project.stack}
            </p>

            <div className="projects-project-buttons">

              <button className="projects-github-button">
                GitHub
              </button>

              <button className="projects-demo-button">
                Demo
              </button>

            </div>

          </article>
        ))}

      </section>

    </main>
  );
}