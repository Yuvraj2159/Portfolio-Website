import React from "react";
import { motion } from "framer-motion";
import { UserCircle } from "lucide-react";

const About = () => {
  return (
    <motion.section 
      id="about" 
      className="py-16 px-8 bg-gray-800 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold text-indigo-500 flex justify-center items-center gap-2 mb-6">
        <UserCircle /> About Me
      </h2>
      <p className="max-w-2xl mx-auto text-gray-300 text-lg">
        I am a dedicated Web Developer specializing in creating modern, responsive web applications using React and Tailwind CSS. My passion lies in building engaging user experiences and writing clean, efficient code.
      </p>
    </motion.section>
  );
};

export default About;
