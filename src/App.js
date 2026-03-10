import React from "react";
import Navbar from "./NavBar";

import Landing from "./Screens/Landing";
import AboutMe from "./Screens/AboutMe";
import TechStack from "./Screens/TechStack";
import Projects from "./Screens/Projects";
import Resume from "./Screens/Resume";
import Contact from "./Screens/Contact";
import Footer from "./Screens/Footer";

export default function App() {
  return (
    <div>

      <Navbar />

      <section id="home">
        <Landing />
      </section>

      <section id="about">
        <AboutMe />
      </section>

      <section id="stack">
        <TechStack />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="resume">
        <Resume />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />

    </div>
  );
}