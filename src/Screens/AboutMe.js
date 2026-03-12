import React from "react";
import "../styles/AboutMe.css";

export default function AboutMe() {

  const getAge = (birthDateString) => {
  const today = new Date();
  const birthDate = new Date(birthDateString);

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  const dayDifference = today.getDate() - birthDate.getDate();
  
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && dayDifference < 0)
  ) {
    age--;
  }

  return age;
};
 // Replace with your actual birth date in YYYY-MM-DD format

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

          <h2 style={{marginBottom:25}}>Background</h2>

          <p>
            Hey, my name is Ernesto, I'm {getAge("2003-07-28")} currently studying Computer Science at
            Florida International University. My focus is on building
            practical applications using modern technologies to grow my skills and create real-world usable software that can contribute in a positive way. I'm from Cuban descent and was born and raised overseas until I turned 14 when I moved to Miami with my family. My hobbies are fishing, going to the gym, and every now and then when I have spare time I like to play video games. My aspiration is to graduate from FIU with my Bachelors and get a good job in tech in which I can expand my skills and grow as a software engineer.
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
          <p>Software Engineering • Fintech • Mobile Apps • Fitness • Fishing/Boating </p>
        </div>

      </section>

    </main>
  );
}