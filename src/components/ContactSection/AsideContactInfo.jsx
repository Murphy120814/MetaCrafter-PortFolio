// import react from 'react';
import React from "react";
import locationIcon from "../../assets/location.svg";
import mailIcon from "../../assets/mail.svg";
import linkedIn from "../../assets/linkedInNewSvg.svg";
import mediumIcon from "../../assets/mediumNewSvg.svg";

import gitHubLogo from "../../assets/gitHubNewSvg.svg";

function AsideContactInfo() {
  return (
    <div className="contact info ">
      <h3>Contact Info.</h3>
      <div className="infoBox">
        <div>
          <span>
            <a
              href="mailto:prathm12.dev@gmail.com"
              target="_blank"
              rel="noreferrer">
              <img src={mailIcon} alt="mailVector" />
            </a>
          </span>
          <p style={{fontWeight:"bold"}}>prathm12.dev@gmail.com</p>
        </div>
        <div>
          <span>
            <img src={locationIcon} alt="locationVector" />
          </span>
          <p style={{fontWeight:"bold"}}> Panvel, Mumbai, India</p>
        </div>

        <ul className="socialMedia">
          <li>
            <a
              href="https://www.linkedin.com/in/prathmesh-ganesh-vhatkar-0024992b2/"
              target="_blank"
              rel="noreferrer">
              <img src={linkedIn} alt="LinkedInLogo" />
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@prathm12"
              target="_blank"
              rel="noreferrer">
              <img src={mediumIcon} alt="Medium" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Murphy120814"
              target="_blank"
              rel="noreferrer">
              <img src={gitHubLogo} alt="GitHub" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AsideContactInfo;
