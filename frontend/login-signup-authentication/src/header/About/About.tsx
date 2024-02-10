// src/components/About.tsx
import React from 'react';
import './about.style.css'; // Import the CSS file for styling

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
        Proin ac interdum velit. Donec nec maximus ipsum. Morbi at mauris vel
        tortor tincidunt fermentum. Fusce eget justo eu purus tincidunt tempor.
        Sed nec volutpat ligula. Aenean ullamcorper tincidunt urna, vel dapibus
        elit venenatis non.
      </p>
      <p>
        Phasellus euismod arcu a felis lobortis, eu vestibulum justo posuere.
        Integer mattis lectus nec arcu varius, nec blandit risus fermentum.
        Vivamus ut malesuada sem. Fusce fermentum metus id neque volutpat, vel
        consequat elit sollicitudin.
      </p>
    </div>
  );
};

export default About;
