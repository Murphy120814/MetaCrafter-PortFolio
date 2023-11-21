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
          <h2 className="eyebrows">
            Skills and Resume{" "}
            <span title="Download My Resume" className="resumeDownload">
              <a
                href="https://drive.google.com/file/d/13NiPamcD_2kmAb2C6i-8sZPhgYTUyixB/view?usp=sharing"
                target="_blank"
                rel="noreferrer">
                {darkMode ? (
                  <img src={pdfDownload} alt="DownloadMYResume" />
                ) : (
                  <img src={pdfDownloadLight} alt="DownloadMYResume" />
                )}
              </a>
            </span>
          </h2>

          <p className="intro">
            Hello, and welcome to my profile! As a fresh and enthusiastic
            frontend developer, I thrive in create interactive web experiences
            using React, vanilla CSS, JavaScript, and HTML. My keen eye for
            design and passion for UI/UX further empowers me to create visually
            engaging and user-friendly interfaces. Eager to embark on a
            fulfilling journey, I&apos;m actively seeking opportunities to
            contribute my skills and grow within a collaborative team.
            Let&apos;s build something amazing together.
          </p>
          <div>
            <h3 className="edu-title">
              <span>E</span>ducational Qualification<span>:</span>
            </h3>
            <EducationExp />
          </div>
          <div>
            <h3 className="edu-title">
              <span>A</span>chievements and <span>C</span>ertifications
              <span>:</span>
            </h3>
            <Certification />
          </div>
          <div>
            <h3 className="edu-title">
              <span>W</span>ork Experience<span>:</span>
            </h3>
            <WorkExp />
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
