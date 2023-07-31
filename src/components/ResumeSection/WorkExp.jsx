import React from 'react';
import ResumeSectionCardTemplate from './ResumeSectionCardTemplate';
import { workExp } from '../../constants/constants';

function WorkExp() {
  return (
    <div className="job-experience">
      {workExp.map((card) => <ResumeSectionCardTemplate key={card.id} year={card.year} roleName={card.roleName} companyName={card.companyName} someInfoAboutRole={card.someInfo} />)}
    </div>
  );
}
export default WorkExp;
