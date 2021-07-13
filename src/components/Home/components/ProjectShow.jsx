import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import {
  projectshow,
  projects,
  linkProjects,
} from "../../../styles/projectshow.module.css";
import Project from "./Project";

function ProjectShow({ projectsList }) {
  // console.log(projectsList[0]);
  return (
    <div className={projectshow}>
      <h2>Featured projects</h2>
      <div className={projects}>
        {projectsList?.map((project) => (
          <Project data={project} />
        ))}
      </div>
      <NavLink className={linkProjects} to="/projects">
        <i className="bi bi-archive-fill"></i> View archive
      </NavLink>
    </div>
  );
}

export default ProjectShow;
