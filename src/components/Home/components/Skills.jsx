import React from "react";
import { skills, skill, tool, list } from "../../../styles/skills.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Skills({ skillsList, tools }) {
  return (
    <div className={skills}>
      <div className={skill}>
        <i className="bi bi-lightning-fill"></i>
        <h2>Skills</h2>
        <div className={list}>
          {skillsList?.map((skill) => (
            <p>{skill}</p>
          ))}
        </div>
      </div>
      <div className={tool}>
        <i className="bi bi-tools"></i>
        <h2>Tools</h2>
        <div className={list}>
          {tools?.map((toolItem) => (
            <p>{toolItem}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
