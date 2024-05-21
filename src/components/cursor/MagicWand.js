// src/MagicWand.js
import React, { useState, useEffect } from 'react';
import Particle from './Particle';

const MagicWand = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX: x, clientY: y } = event;
      const color = `hsl(${Math.random() * 360}, 100%, 50%)`;

      setParticles((prev) => [
        ...prev,
        { x, y, color, id: Math.random(), createdAt: Date.now() },
      ]);
    };

    const cleanUpParticles = () => {
      setParticles((prev) =>
        prev.filter((particle) => Date.now() - particle.createdAt < 2000)
      );
    };

    document.addEventListener('mousemove', handleMouseMove);
    const interval = setInterval(cleanUpParticles, 100);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {particles.map((particle) => (
        <Particle key={particle.id} x={particle.x} y={particle.y} color={particle.color} />
      ))}
    </>
  );
};

export default MagicWand;
