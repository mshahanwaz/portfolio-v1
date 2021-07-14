import React, { useEffect, useState } from "react";
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
  // console.log(projectsList[0]);
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
            return <Project data={project} imageFull={tinder} />;
        })}
      </div>
      <NavLink className={linkProjects} to="/projects">
        <i className="bi bi-archive-fill"></i> View archive
      </NavLink>
    </div>
  );
}

export default ProjectShow;
