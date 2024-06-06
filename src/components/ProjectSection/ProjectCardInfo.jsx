import React from "react";
import { cards } from "../../constants/constants";
import ProjectCardTemplate from "./ProjectCardTemplate";

function ProjectCardInfo() {
  return (
    <div className="card__container-main_flex">
      {cards.map((card, index) => (
        <ProjectCardTemplate
          key={index}
          cardNumber={card.cardNumber}
          title={card.projectName}
          para={card.info}
          technology={card.technology}
          readLink={card.readLink}
          viewLink={card.viewLink}
          ongoing={card.ongoing}
        />
      ))}
    </div>
  );
}

export default ProjectCardInfo;
