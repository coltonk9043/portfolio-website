import React from "react";
import "./ExperienceCard.css";

const ExperienceCard = (properties) => {
  return (
    <div className="experience-card-body">
        <img className="experience_img" src={properties.img}></img>
        <h1 className="experience_name">{properties.title}</h1>
        <h2 className="experience_description">{properties.description}</h2>
    </div>
  );
};

export default ExperienceCard;