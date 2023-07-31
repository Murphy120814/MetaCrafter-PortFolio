import React from 'react';

import { Navbar, HeroSection, ProjectSection, ResumeSection } from './index';

function App() {
  return (
    <div className="container">
      <Navbar />
      <HeroSection />
      <ProjectSection />
      <ResumeSection />
    </div>
  );
}

export default App;
