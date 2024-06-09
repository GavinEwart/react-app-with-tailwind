// src/components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="container mx-auto p-10 text-white text-center rounded-lg shadow-lg my-10 moving-gradient">
      <h1 className="text-5xl font-bold mb-5">Welcome to My Portfolio</h1>
      <p className="text-xl">I create modern and responsive web applications.</p>
    </section>
  );
};

export default Hero;
