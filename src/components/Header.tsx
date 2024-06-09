// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-5 bg-gray-800 text-white sticky top-0 z-10">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <nav className="hidden md:flex">
        <a href="#about" className="mx-2 hover:text-gray-400 transition-colors">About</a>
        <a href="#projects" className="mx-2 hover:text-gray-400 transition-colors">Projects</a>
        <a href="#contact" className="mx-2 hover:text-gray-400 transition-colors">Contact</a>
      </nav>
      <button className="md:hidden">Menu</button>
    </header>
  );
};

export default Header;
