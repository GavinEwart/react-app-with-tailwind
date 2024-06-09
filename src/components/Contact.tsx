// src/components/Contact.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <motion.section
      id="contact"
      className="container mx-auto p-10 bg-gray-100 my-10 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <h2 className="text-3xl font-bold mb-5">Contact</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-lg">Name</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-lg">Email</label>
          <input type="email" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-lg">Message</label>
          <textarea className="w-full p-2 border rounded"></textarea>
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Send</button>
      </form>
    </motion.section>
  );
};

export default Contact;
