import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import LiveProjects from './components/LiveProjects';
import Internship from './components/Highlights';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" : "bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50"}>
      <button
        className="fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-4 py-2 rounded shadow-lg transition-colors"
        onClick={() => setDarkMode((prev) => !prev)}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <Hero darkMode={darkMode} />
      <LiveProjects darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Internship darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </div>
  );
}

export default App;