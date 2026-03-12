import React from "react";
import "../styles/Projects.css";

export default function Projects() {

  const projects = [
    {
      title: "Expense Tracker",
      description:
        "A budgeting and expense tracking app with transaction insights and category analysis.",
      stack: "React Native, Node.js, Firebase, Plaid API, Javascript, HTML5, CSS",
    },
    {
      title: "Image Puzzle",
      description:
        "Mobile application to track workouts, sets, and long-term training progress.",
      stack: "React Native, Node.js, MinMax Algorithm, Javascript,HTML5, CSS",
    },
    {
      title: "Shopping Experience/Analysis",
      description:
        "Encrypted file storage application concept using authentication and secure upload.",
      stack: "React, Node.js, JavaScript, Apriori Algorithm, HTML5, CSS",
    },
  ];

  return (
    <main className="projects-page-container">

      <section className="projects-header-section">

        <h1 className="projects-header-title" style={{marginBottom:50}}>
          Projects
        </h1>

        <p className="projects-header-description">
          These are some of the projects I've worked on while developing my
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

              <button  onClick={() => {
              let url =""
              if ( project.title == "Expense Tracker") {
                url = "https://github.com/erne2003/ExpenseTracker"
              } else if ( project.title == "Image Puzzle") {
                url = "https://github.com/erne2003/PuzzleGame"
              } else if ( project.title == "Shopping Experience/Analysis") {
                url = "https://github.com/erne2003/DataMining"
              }
              window.open(url, "_blank");
            }}
             className="projects-github-button">
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