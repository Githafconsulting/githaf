
import React from 'react';

const ParticleEffect: React.FC = () => {
  return (
    <div className="particles">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${20 + Math.random() * 10}s`
          }}
        />
      ))}
    </div>
  );
};

export default ParticleEffect;
