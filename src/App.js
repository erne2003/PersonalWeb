import React from "react";
import Navbar from "./NavBar";

import Landing from "./Screens/Landing";
import AboutMe from "./Screens/AboutMe";
import TechStack from "./Screens/TechStack";
import Projects from "./Screens/Projects";
import Resume from "./Screens/Resume";
import Contact from "./Screens/Contact";
import Footer from "./Screens/Footer";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/techstack" element={<TechStack />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}