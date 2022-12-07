import React from "react";
import "./SkillCard.css";

const SkillCard = (properties) => {
  return (
    <div className="skill_card_body">
        <img className="skill_card-img" src={properties.img}></img>
        <h1 className="skill_card_name">{properties.name}</h1>
    </div>
  );
};

export default SkillCard;