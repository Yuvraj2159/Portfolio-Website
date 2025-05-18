import React from "react";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-8 bg-gray-900 text-center">
      <h2 className="text-4xl font-bold text-indigo-500 flex justify-center items-center gap-2 mb-10">
        <Mail /> Contact Me
      </h2>
      <form className="max-w-xl mx-auto space-y-4">
        <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded bg-gray-800 text-white outline-none" />
        <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded bg-gray-800 text-white outline-none" />
        <textarea rows="5" placeholder="Your Message" className="w-full px-4 py-2 rounded bg-gray-800 text-white outline-none"></textarea>
        <button type="submit" className="bg-indigo-500 px-6 py-2 rounded-lg text-white hover:bg-indigo-600">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
