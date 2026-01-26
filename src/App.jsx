import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import EducationAndAchievements from "./components/EducationAndAchievements";
import Contact from "./components/Contact";
import SmoothScroll from "./components/SmoothScroll";
import Footer from "./components/Footer";

import portfolioData from "./data/portfolio.json";
import { applyTheme } from "./utils/theme";

// Create Context
export const MobileContext = React.createContext();

function App() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    applyTheme(portfolioData.theme);
  }, []);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <MobileContext.Provider value={{ isMobile }}>
      <SmoothScroll>
        <div className="bg-gray-50 dark:bg-black w-full overflow-x-hidden min-h-[100dvh] md:min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
          <Header />
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <EducationAndAchievements />
          <Contact />
          <Footer />
        </div>
      </SmoothScroll>
    </MobileContext.Provider>
  );
}

export default App;
