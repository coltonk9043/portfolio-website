import React from "react";
import Card from '../components/Card';
import projects from "../data/projects";
import Banner from '../components/Banner';

const Projects = () => {
    const renderProjects = () => {
        let cards = [];
        for (let i = 0; i < projects.length; i++) {
          const project = projects[i];
          cards.push(
              <Card img={project.img} title={project.title} description={project.description} repo={project.repo}/>
          );
        }
    
        return cards;
      };

    return (
        <div>
           <Banner />
          <h1 className="header_body">Projects</h1>
          <div className="main_container">
            {renderProjects()}
          </div>
        </div>
      );
};

export default Projects