import React from 'react';
import './heroSection.css';
import HeroSectionPic from './HeroSectionPic';
import HeroSectionInfo from './HeroSectionInfo';

function HeroSection() {
  return (
    <main className="heroSection__container">
      <HeroSectionInfo />
      <HeroSectionPic />
    </main>
  );
}

export default HeroSection;
