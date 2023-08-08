import React from 'react';
import htmlFile from '../../assets/html-file.svg';
import cssFile from '../../assets/css-file.svg';
import jsFile from '../../assets/javascript-file.svg';
import reactFile from '../../assets/react-file.svg';
import tailwindFile from '../../assets/tailwind-file.svg';
import materialUiFile from '../../assets/material-ui-file.svg';
import figmaFile from '../../assets/figma_file.svg';

// importing light theme icons
import htmlFileLight from '../../assets/htmlfile_light.svg';
import cssFileLight from '../../assets/css_light.svg';
import jsFileLight from '../../assets/javascrip_light.svg';
import reactFileLight from '../../assets/react_light.svg';
import tailwindFileLight from '../../assets/tailwind_light.svg';
import materialUiFileLight from '../../assets/materialUI_light.svg';
import figmaFileLight from '../../assets/figma_light.svg';

function SkillSection({ darkMode }) {
  return (
    <ul className="icon-list">
      <li>
        {darkMode ? <img src={htmlFile} alt="htmlFileVector" /> : <img src={htmlFileLight} alt="htmlFileVector" />}

      </li>

      <li>
        {darkMode ? <img src={cssFile} alt="cssFileVector" /> : <img src={cssFileLight} alt="cssFileVector" />}

      </li>

      <li>
        {darkMode ? <img src={jsFile} alt="jsFileVector" /> : <img src={jsFileLight} alt="jsFileVector" />}

      </li>

      <li>
        {darkMode ? <img src={reactFile} alt="reactFileVector" /> : <img src={reactFileLight} alt="reactFileVector" />}

      </li>

      <li>
        {darkMode ? <img src={tailwindFile} alt="tailwindFileVector" /> : <img src={tailwindFileLight} alt="tailwindFileVector" />}

      </li>
      <li>
        {darkMode ? <img src={materialUiFile} alt="materialUiFileVector" /> : <img src={materialUiFileLight} alt="materialUiFileVector" />}

      </li>
      <li>
        {darkMode ? <img src={figmaFile} alt="figmaFileVector" /> : <img src={figmaFileLight} alt="figmaFileVector" />}

      </li>
    </ul>

  );
}

export default SkillSection;
