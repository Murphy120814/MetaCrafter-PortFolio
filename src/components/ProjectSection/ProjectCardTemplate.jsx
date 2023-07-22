import React from 'react';
import ViewResourceRedirect from './ViewResourceRedirect';
import ViewWebsiteRedirect from './ViewWebsiteRedirect';
import TechStack from './TechStack';

function ProjectCardTemplate({ cardNumber, title, para, technology, readLink, viewLink }) {
  return (
    <div className="projectCardTemplate__container-flex">
      {/* this is the main container where every card will recite  */}
      <div className="card">
        <h2>{cardNumber}</h2>
        <div className="content">
          <div className="cardInfo">
            <h3>{title}</h3>
            <p>{para}</p>
          </div>
          <div className="tech-info">
            <TechStack technologies={technology} />
          </div>
          <div className="btn-redirect">
            <ViewResourceRedirect readMoreLink={readLink} />
            <ViewWebsiteRedirect viewLink={viewLink} />
          </div>

        </div>

      </div>
    </div>
  );
}

export default ProjectCardTemplate;
