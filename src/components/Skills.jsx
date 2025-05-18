import React from "react";
import { Code } from "lucide-react";
import { FaReact, FaJs, FaDatabase, FaMicrosoft } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-cyan-400 w-12 h-12" />, level: "90%" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 w-12 h-12" />, level: "85%" },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 w-12 h-12" />, level: "95%" },
  { name: "SQL", icon: <FaDatabase className="text-green-400 w-12 h-12" />, level: "75%" },
  { name: "Microsoft Office", icon: <FaMicrosoft className="text-blue-500 w-12 h-12" />, level: "90%" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-8 bg-gray-900 text-center">
      <h2 className="text-4xl font-bold text-indigo-500 flex justify-center items-center gap-2 mb-10">
        <Code /> Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            {skill.icon}
            <h3 className="text-xl font-semibold mt-4">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
