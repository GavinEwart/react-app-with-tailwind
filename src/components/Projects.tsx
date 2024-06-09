// src/components/Projects.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <motion.section
      id="projects"
      className="container mx-auto p-10 bg-white my-10 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <h2 className="text-3xl font-bold mb-5">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Add your project details here */}
        <motion.div
          className="p-5 border rounded-lg shadow-sm"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold">Project 1</h3>
          <p>Description of project 1.</p>
        </motion.div>
        <motion.div
          className="p-5 border rounded-lg shadow-sm"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold">Project 2</h3>
          <p>Description of project 2.</p>
        </motion.div>
        {/* Add more project cards as needed */}
      </div>
    </motion.section>
  );
};

export default Projects;
