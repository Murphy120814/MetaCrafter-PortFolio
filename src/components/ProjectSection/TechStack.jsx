import React from 'react';

function TechStack({ technologies }) {
  return (
    <div className="techStack__technologies">
      {technologies.map((technology, index) => (
        <img
          key={index}
          src={technology}
          alt={`technology Name: ${technology}`}
        />
      ))}
    </div>
  );
}

export default TechStack;
