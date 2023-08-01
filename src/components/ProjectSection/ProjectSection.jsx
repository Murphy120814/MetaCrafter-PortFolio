import React from 'react';
import './projectSection.css';
import ProjectCardInfo from './ProjectCardInfo';

function ProjectSection() {
  return (

    <div className="projectSection__container-flex scale-up-center" id="projects">
      <h2 className="title">Projects</h2>
      <ProjectCardInfo />
    </div>

  );
}

export default ProjectSection;
