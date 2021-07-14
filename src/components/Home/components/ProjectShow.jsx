import React from "react";
import { NavLink } from "react-router-dom";

import {
  projectshow,
  projects,
  linkProjects,
} from "../../../styles/projectshow.module.css";
import Project from "./Project";

function ProjectShow({ projectsList }) {
  return (
    <div className={projectshow}>
      <h2>Featured projects</h2>
      <div className={projects}>
        {projectsList?.map((project) => {
          if (project.title === "Weather App")
            return <Project data={project} imageFull="https://camo.githubusercontent.com/b208b30a87e67275707d672cc357b9227e1f132251eabce9435b81586e6b3504/68747470733a2f2f64333377756272666b69306c36382e636c6f756466726f6e742e6e65742f3630636335613436383337643632613039646339393138352f73637265656e73686f745f323032312d30362d31382d30382d33332d31352d303030302e706e67" />;
          else if (project.title === "Netflix Clone")
            return <Project data={project} imageFull="https://github.com/mshahanwaz/netflix-build/raw/master/screenshots/netflix.png" />;
          else if (project.title === "Tinder Clone")
            return <Project data={project} imageFull="https://github.com/mshahanwaz/tinder-clone/raw/master/screenshots/tinder.png" dir={1} />;
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
