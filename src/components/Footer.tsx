// src/components/Footer.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="p-5 bg-gray-800 text-white text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      &copy; 2024 My Portfolio. All rights reserved.
    </motion.footer>
  );
};

export default Footer;
