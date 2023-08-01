// import react from 'react';
import React from 'react';
import locationIcon from '../../assets/location.svg';
import mailIcon from '../../assets/mail.svg';
import linkedIn from '../../assets/linkedin.svg';
import mediumIcon from '../../assets/medium-svgrepo-com.svg';
import telegramLogo from '../../assets/telegram-svgrepo-com.svg';
import discordLogo from '../../assets/discord-svgrepo-com.svg';

function AsideContactInfo() {
  return (
    <div className="contact info ">
      <h3>Contact Info.</h3>
      <div className="infoBox">
        <div>
          <span><a href="mailto:prathmdev@gmail.com" target="_blank" rel="noreferrer"><img src={mailIcon} alt="mailVector" /></a></span>
          <p>prathmdev@gmail.com</p>
        </div>
        <div>
          <span><img src={locationIcon} alt="locationVector" /></span>
          <p> Panvel, Mumbai, India</p>
        </div>

        <ul className="socialMedia">
          <li><a href="https://www.google.com" target="_blank" rel="noreferrer"><img src={linkedIn} alt="LinkedInLogo" /></a></li>
          <li><a href="https://www.google.com" target="_blank" rel="noreferrer"><img src={mediumIcon} alt="LinkedInLogo" /></a></li>
          <li><a href="https://www.google.com" target="_blank" rel="noreferrer"><img src={telegramLogo} alt="LinkedInLogo" /></a></li>
          <li><a href="https://www.google.com" target="_blank" rel="noreferrer"><img src={discordLogo} alt="LinkedInLogo" /></a></li>
        </ul>

      </div>

    </div>
  );
}

export default AsideContactInfo;
