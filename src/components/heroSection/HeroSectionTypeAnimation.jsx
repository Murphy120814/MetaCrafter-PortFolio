import React, { useEffect, useState } from "react";

function HeroSectionTypeAnimation() {
  const [text, setText] = useState("Front-End Developer");

  useEffect(() => {
    const textValues = ["Front-End Developer.", "Designer.", "Blogger"];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % textValues.length;
      setText(textValues[currentIndex]);
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="wrapper">
      <span className="text first-text">a </span>
      <span className="text sec-text">{text}</span>
    </div>
  );
}

export default HeroSectionTypeAnimation;
