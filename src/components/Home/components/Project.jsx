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
import img from "../../../assets/images/1.jpg";
import Tag from "./Tag";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

function Project({ data, dir }) {
  return (
    <div className={project}>
      <div className={imageWrap}>
        <img src={img} alt="nothing" className={image} />
      </div>
      <div className={detail}>
        <div className={link}>
          <h3>
            <Link to="/" className={newlink}>
              {data.title}
            </Link>
          </h3>
          <a href={data.github} target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i>
          </a>
        </div>
        <div className={description}>{data.description}</div>
        <div className={tags}>
         {data.tags.map(tag => {
           return (
             <Tag data={tag} />
           )
         })}
        </div>
      </div>
    </div>
  );
}

export default Project;
