import React from 'react';
import ResumeSectionCardTemplate from './ResumeSectionCardTemplate';
import { certification } from '../../constants/constants';

function Certification() {
  return (
    <div className="job-experience">
      {certification.map((card) => <ResumeSectionCardTemplate key={card.id} year={card.year} roleName={card.roleName} companyName={card.companyName} someInfoAboutRole={card.someInfo} />)}
    </div>
  );
}

export default Certification;
