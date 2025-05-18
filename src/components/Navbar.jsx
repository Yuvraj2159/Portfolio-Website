import React from "react";
import { Home, User, Briefcase, MessageSquare } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex justify-center gap-8 py-6 bg-gray-800 shadow-lg sticky top-0 z-50">
      <a href="#home" className="hover:text-indigo-400 flex items-center gap-1">
        <Home /> Home
      </a>
      <a href="#about" className="hover:text-indigo-400 flex items-center gap-1">
        <User /> About
      </a>
      <a href="#projects" className="hover:text-indigo-400 flex items-center gap-1">
        <Briefcase /> Projects
      </a>
      <a href="#contact" className="hover:text-indigo-400 flex items-center gap-1">
        <MessageSquare /> Contact
      </a>
    </nav>
  );
};

export default Navbar;
