import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  blog,
  title,
  article,
  tags,
  date,
  readDate,
  read,
  link,
} from "../../../styles/blog.module.css";
import Tag from "../../Home/components/Tag";

function Blog() {
  const tagsList = ["hello", "mello", "world"];

  return (
    <div className={blog}>
      <div className={title}>
        <h4>
          <Link exact to="/blogs/1" className={link}>
            A blog article
          </Link>
        </h4>
        <p>#1</p>
      </div>
      <div className={article}>
        <div className={readDate}>
          <p className={read}>2 mins read</p>
          <p className={date}>21 Sept, 2021</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
          asperiores commodi expedita repellendus illo ex mollitia porro rem
          eligendi fuga!
        </p>
      </div>
      <div className={tags}>
        {tagsList.map((tag) => (
          <Tag data={tag} />
        ))}
      </div>
    </div>
  );
}

export default Blog;
