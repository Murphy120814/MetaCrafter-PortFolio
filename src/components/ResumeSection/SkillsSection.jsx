import React from 'react';
import htmlFile from '../../assets/html-file.svg';
import cssFile from '../../assets/css-file.svg';
import jsFile from '../../assets/javascript-file.svg';
import reactFile from '../../assets/react-file.svg';
import tailwindFile from '../../assets/tailwind-file.svg';
import materialUiFile from '../../assets/material-ui-file.svg';

function SkillSection() {
  return (
    <ul className="icon-list">
      <li>
        <img src={htmlFile} alt="htmlFileVector" />
      </li>

      <li>
        <img src={cssFile} alt="cssFileVector" />
      </li>

      <li>
        <img src={jsFile} alt="jsFileVector" />
      </li>

      <li>
        <img src={reactFile} alt="reactFileVector" />
      </li>

      <li>
        <img src={tailwindFile} alt="tailwindFileVector" />
      </li>
      <li>
        <img src={materialUiFile} alt="materialUiFileVector" />
      </li>
    </ul>

  );
}

export default SkillSection;
