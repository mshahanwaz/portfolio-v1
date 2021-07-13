import React from "react";
import {
  item,
  span1,
  span2,
  span3,
  span4,
} from "../../../styles/projectitem.module.css";

function ProjectItem({ data, index }) {
  return (
    <div className={item}>
      <span className={span1}>{index}</span>
      <span className={span2}>{data.title}</span>
      <span className={span3}>{data.year}</span>
      <span className={span4}>
        <a href={data.link}>
          <i className="bi bi-box-arrow-up-right"></i>
        </a>
      </span>
    </div>
  );
}

export default ProjectItem;
