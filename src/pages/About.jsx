import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/')}>Back</button>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
        recusandae corporis omnis id sed veritatis quidem sunt tempora autem
        accusamus.
      </p>
    </div>
  );
};

export default About;
