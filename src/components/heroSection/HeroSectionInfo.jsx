import React from 'react';
import { Link } from 'react-scroll';
import HeroSectionTypeAnimation from './HeroSectionTypeAnimation';

function HeroSectionInfo() {
  return (
    <div className="heroSectionInfo__container">
      <div className="heroSectionInfo__container-child">
        <h1>I am <span>P</span>rathmesh Vhatkar,</h1>
        <HeroSectionTypeAnimation />
        <p>An aspiring frontend developer with a passion for React, CSS, and the creative world of web design. As a beginner, I&apos; m eager to dive into the world of coding and bring my imaginative ideas to life. I&apos; m currently on the lookout for exciting opportunities as a fresher to grow and learn from experienced teams. Let&apos;s collaborate and build something fantastic together!</p>
        <Link to="contact" smooth duration={1000} offset={-120}>
          <button type="button" className="call_to_action_btn vibrate-1">Contact me</button>
        </Link>
      </div>

    </div>
  );
}

export default HeroSectionInfo;
