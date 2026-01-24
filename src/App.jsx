import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import portfolioData from "./data/portfolio.json";
import SmoothScroll from "./components/SmoothScroll";
import Footer from "./components/Footer";

function App() {
  return (
    <SmoothScroll>
      <div className="bg-gray-50 dark:bg-black w-screen overflow-x-hidden min-h-[100dvh] md:min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
        <Header />
        <Hero personalInfo={portfolioData.personalInfo} />
        <div className="space-y-0">
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </div>
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
