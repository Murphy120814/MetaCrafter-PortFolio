import React from 'react';

function ResumeSectionCardTemplate({ year, roleName, companyName, someInfoAboutRole }) {
  return (
    <div className="job">
      <p className="year">{year}</p>
      <div className="job-info">
        <h2 className="role">{roleName}</h2>
        <span className="company">{companyName}</span>
      </div>
      <p className="company-info">{someInfoAboutRole}</p>
    </div>
  );
}

export default ResumeSectionCardTemplate;
