import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
// import Projects from "./components/Projects"; // ✅ fixed import name
// If the file is named 'Project.tsx', use the following import:
import Projects from "./components/Project";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import DownloadCVButton from "./components/DownloadCVButton";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // On first load → check saved theme OR system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    } else {
      setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  // Apply theme to <html> + persist in localStorage
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "bg-zinc-950 text-white"
          : "bg-zinc-50 text-zinc-900"
      }`}
    >
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Resume />
      <Contact />
      <DownloadCVButton />
    </div>
  );
}

export default App;
