import React from "react";
import experiences from "../data/experience";
import skills from "../data/skills";
import ExperienceCard from '../components/ExperienceCard';
import SkillCard from "../components/SkillCard";

const Experience = () => {
  const renderSkills = () => {
    let skill = [];
    for (let i = 0; i < skills.length; i++) {
      const exp = skills[i];
      skill.push(
          <SkillCard name={exp.name} img={exp.img}/>
      );
    }
    return skill;
  }

  const renderExperience = () => {
    let experience = [];
    for (let i = 0; i < experiences.length; i++) {
      const exp = experiences[i];
      experience.push(
          <ExperienceCard name={exp.title} description={exp.description}/>
      );
    }
    
    return experience;
  };

  return (
      <div>
        <div>
          <h1 className="header_body">Skills / Technologies</h1>
          <div className="main_container">
            {renderSkills()}
          </div>
        </div>
        <div>
          <h1 className="header_body">Experience</h1>
          <div className="main_container">
            {renderExperience()}
          </div>
        </div>
      </div>
     );
};

export default Experience