import React, { useState, useEffect } from "react";

import {
  Navbar,
  HeroSection,
  ProjectSection,
  ResumeSection,
  ContactSection,
  FooterSection,
} from "./index";

function App() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  const [alertShown, setAlertShown] = useState(false);

  const showAlertIfNeeded = () => {
    if (window.innerWidth < 1000 && !alertShown) {
      window.alert(
        "May I Suggest? For a fuller experience, kindly explore my website on a larger screens such as Laptop. "
      );
      setAlertShown(true);
    }
  };

  useEffect(() => {
    // Show the alert when the component mounts
    showAlertIfNeeded();

    // Set up an event listener to check the screen width whenever the window is resized
    window.addEventListener("resize", showAlertIfNeeded);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", showAlertIfNeeded);
    };
  }, [alertShown]);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  useEffect(() => {
    document.documentElement.classList.toggle("lightMode", !darkMode);
  }, [darkMode]);
  return (
    <div className="container">
      <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
      <HeroSection />
      <ProjectSection />
      <ResumeSection darkMode={darkMode} />
      <FooterSection />
    </div>
  );
}

export default App;
