// src/Particle.js
import React, { useEffect, useRef } from 'react';
import './Particle.css';

const Particle = ({ x, y, color }) => {
  const particleRef = useRef(null);

  useEffect(() => {
    const element = particleRef.current;
    if (element) {
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;
      element.style.backgroundColor = color;
    }
  }, [x, y, color]);

  return <div ref={particleRef} className="particle" />;
};

export default Particle;
