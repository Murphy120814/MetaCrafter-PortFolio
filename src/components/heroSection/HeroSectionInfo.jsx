import React from 'react';
import { Link } from 'react-scroll';
import HeroSectionTypeAnimation from './HeroSectionTypeAnimation';

function HeroSectionInfo() {
  return (
    <div className="heroSectionInfo__container">
      <div className="heroSectionInfo__container-child">
        <h1>I am <span>P</span>rathmesh Vhatkar,</h1>
        <HeroSectionTypeAnimation />
        <p>As an experienced frontend developer, I bring a deep passion for React, Javascript and Next.js, along with a burgeoning expertise in Tailwind, GSAP and Three.js. My journey in web development has been fueled by a love for creativity and design, driving me to turn imaginative ideas into dynamic, user-friendly applications. I am continually honing my skills and eagerly seeking new challenges that allow me to grow and innovate. Let's collaborate to create exceptional digital experiences and push the boundaries of web design together!</p>
        <Link to="contact" smooth duration={1000} offset={-120}>
          <button type="button" className="call_to_action_btn vibrate-1">Contact me</button>
        </Link>
      </div>

    </div>
  );
}

export default HeroSectionInfo;
