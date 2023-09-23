import React from "react";
import { useParams } from "react-router-dom";

import { projects } from "../helpers/projectsList";
import BtnGitHub from "../components/BtnGitHub/BtnGitHub";
import BtnWebsiteLink from "../components/BtnWebsiteLink/BtnWebsiteLink";

const Project = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img
            src={project.imgBig}
            alt={project.title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>Used: {project.skills}</p>
            <p className="project-details__desc--format">
              Project format: {project.format}
            </p>
            <p>Role: {project.role}</p>
          </div>
          <div className="project-details__btnList">
            <BtnGitHub link={project.gitHubLink} />
            <BtnWebsiteLink link={project.websiteLink} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Project;
