import React from 'react';
import myPhoto from '../../assets/myPhoto.jpg';

function HeroSectionAnotherPic() {
  return (
    <div className="heroSection__anotherPic-container">
      <img alt="alternative avatar" src={myPhoto} />
    </div>
  );
}

export default HeroSectionAnotherPic;
