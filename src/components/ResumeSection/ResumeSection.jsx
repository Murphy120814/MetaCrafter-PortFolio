import React from "react";
import "./resumeSection.css";
import SkillSection from "./SkillsSection";
import EducationExp from "./EducationExp";
import Certification from "./CertificationExp";
import WorkExp from "./WorkExp";
import pdfDownload from "../../assets/file-download-svgrepo-com.svg";
import pdfDownloadLight from "../../assets/pdf_download_light.svg";

function ResumeSection({ darkMode }) {
  return (
    <div className="resumeSection__main-container" id="resume">
      <div className="resumeSection__grid-container">
        <main>
          <h2 className="eyebrows">Skills and Resume </h2>

          <p className="intro">
            Passionate Frontend Developer with a strong foundation in React,
            Next Js, Javascript, Python, HTML, CSS and dynamic animations using
            GSAP and Framer Motion. Currently expanding my expertise into
            Three.js, I thrive on creating engaging, responsive web experiences
            that push the boundaries of user interaction. Eager to bring my
            technical knowledge and creative flair to a team that values
            innovation and exceptional web design.
          </p>
          <div>
            <h3 className="edu-title">
              Educational Qualification<span>:</span>
            </h3>
            <EducationExp />
          </div>
          <div>
            <h3 className="edu-title">
              Work Experience<span>:</span>
            </h3>
            <WorkExp />
          </div>
          <div>
            <h3 className="edu-title">
              Achievements and Certifications
              <span>:</span>
            </h3>
            <Certification />
          </div>
        </main>
        <aside>
          <SkillSection darkMode={darkMode} />
        </aside>
      </div>
    </div>
  );
}

export default ResumeSection;
