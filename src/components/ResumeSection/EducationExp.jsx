import React from 'react';
import ResumeSectionCardTemplate from './ResumeSectionCardTemplate';
import { educationCards } from '../../constants/constants';

function EducationExp() {
  return (
    <div className="job-experience">
      {educationCards.map((card) => <ResumeSectionCardTemplate key={card.id} year={card.year} roleName={card.roleName} companyName={card.companyName} someInfoAboutRole={card.someInfo} />)}
    </div>
  );
}

export default EducationExp;
