import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { ArrowUp } from "lucide-react";

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="font-sans bg-gray-900 text-white relative">
      {/* Navbar */}
      <Navbar />

      {/* Main Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      {/* Floating Action Button for Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-indigo-500 text-white p-3 rounded-full shadow-lg hover:bg-indigo-600 transition-transform transform hover:scale-110 z-50"
        aria-label="Scroll to Top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
}

export default App;
