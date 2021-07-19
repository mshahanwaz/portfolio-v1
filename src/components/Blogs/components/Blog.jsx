import React from "react";
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

function Blog({ blogItem }) {
  return (
    <div className={blog}>
      <div className={title}>
        <h4>
          <Link to={"/blogs/" + blogItem.number} className={link}>
            {blogItem.title}
          </Link>
        </h4>
        <p>{`#${blogItem?.number}`}</p>
      </div>
      <div className={article}>
        <div className={readDate}>
          <p className={read}>{blogItem.readTime} mins read</p>
          <p className={date}>{blogItem.date}</p>
        </div>
        <p>{blogItem.description}</p>
      </div>
      <div className={tags}>
        {blogItem?.tags?.map((tag) => (
          <Tag data={tag} />
        ))}
      </div>
    </div>
  );
}

export default Blog;
