import React from "react";
import { ArrowDownCircle } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center p-8 bg-gradient-to-b from-gray-900 to-gray-800">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm <span className="text-indigo-500">Yuvraj</span></h1>
      <p className="text-xl text-gray-300 mb-8">A Passionate Software Engineer & Web Developer</p>
      <a href="#projects" className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 flex items-center gap-2">
        View My Work <ArrowDownCircle />
      </a>
    </section>
  );
};

export default Hero;
