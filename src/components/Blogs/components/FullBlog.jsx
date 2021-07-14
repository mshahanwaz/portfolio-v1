import React from "react";
import {
  fullBlog,
  readDate,
  read,
  article,
  date,
  tags,
} from "../../../styles/fullblog.module.css";
import Tag from "../../Home/components/Tag";

function FullBlog({ blogItem }) {
  return (
    <div className={fullBlog}>
      <h1>{`#${blogItem.number}`}</h1>
      <h2>{blogItem.title}</h2>
      <div className={readDate}>
        <p className={read}>{blogItem.readTime} mins read</p>
        <p className={date}>{blogItem.date}</p>
      </div>
      <div className={article}>
        <p>{blogItem.main}</p>
      </div>
      <div className={tags}>
        {blogItem?.tags?.map((tag) => (
          <Tag data={tag} />
        ))}
      </div>
    </div>
  );
}

export default FullBlog;
