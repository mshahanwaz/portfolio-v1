import React, { useEffect, useState } from "react";
import {
  projects,
  list,
  container,
  title,
  span1,
  span2,
  span3,
  span4,
} from "../../styles/projects.module.css";
import ProjectItem from "./components/ProjectItem";

function Projects() {
  const [bio, setBio] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch("/biodata.json")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setBio(data);
        });
    };
    fetchData();
  }, []);

  return (
    <div className={projects}>
      <h3>Projects</h3>
      <div className={container}>
        <div className={title}>
          <span className={span1}>#</span>
          <span className={span2}>Title</span>
          <span className={span3}>Year</span>
          <span className={span4}>Link</span>
        </div>
        <div className={list}>
          {bio?.projects?.map((project, index) => {
            console.log(index);
            return <ProjectItem data={project} index={index+1} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
