import React from "react";
import { NavLink } from "react-router-dom";

import {
  projectshow,
  projects,
  linkProjects,
} from "../../../styles/projectshow.module.css";
import Project from "./Project";
import weather from "../../../assets/images/weather.png";
import netflix from "../../../assets/images/netflix.png";
import tinder from "../../../assets/images/tinder.png";

function ProjectShow({ projectsList }) {
  return (
    <div className={projectshow}>
      <h2>Featured projects</h2>
      <div className={projects}>
        {projectsList?.map((project) => {
          if (project.title === "Weather App")
            return <Project data={project} imageFull={weather} />;
          else if (project.title === "Netflix Clone")
            return <Project data={project} imageFull={netflix} />;
          else if (project.title === "Tinder Clone")
            return <Project data={project} imageFull={tinder} dir={1} />;
          return null;
        })}
      </div>
      <NavLink className={linkProjects} to="/projects">
        <i className="bi bi-archive-fill"></i> <p>View archive</p>
      </NavLink>
    </div>
  );
}

export default ProjectShow;
