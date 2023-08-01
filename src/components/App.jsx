import React from 'react';

import { Navbar, HeroSection, ProjectSection, ResumeSection, ContactSection, FooterSection } from './index';

function App() {
  return (
    <div className="container">
      <Navbar />
      <HeroSection />
      <ProjectSection />
      <ResumeSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default App;
