import React from "react";
import {
  project,
  detail,
  link,
  description,
  imageWrap,
  tags,
  newlink,
  image,
} from "../../../styles/project.module.css";
import Tag from "./Tag";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

function Project({ data, dir, imageFull }) {
  return (
    <div className={project}>
      <div className={imageWrap}>
        <span></span>
        <img src={imageFull} alt="nothing" className={image} />
      </div>
      <div className={detail}>
        <div className={link}>
          <h3>
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className={newlink}
            >
              {data.title}
            </a>
          </h3>
          <a href={data.github} target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i>
          </a>
        </div>
        <div className={description}>{data.description}</div>
        <div className={tags}>
          {data.tags.map((tag) => {
            return <Tag data={tag} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Project;
