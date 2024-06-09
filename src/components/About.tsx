// src/components/About.tsx
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <motion.section
      id="about"
      className="container mx-auto p-10 bg-gray-100 my-10 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <h2 className="text-3xl font-bold mb-5">About Me</h2>
      <p className="text-lg">
        I'm a web developer with experience in React, TypeScript, and Tailwind CSS.
        I love creating interactive and visually appealing web applications.
      </p>
    </motion.section>
  );
};

export default About;
