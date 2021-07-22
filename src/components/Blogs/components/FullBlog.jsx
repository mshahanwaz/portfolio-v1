import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fullBlog,
  readDate,
  read,
  article,
  date,
  tags,
  description,
} from "../../../styles/fullblog.module.css";
import Tag from "../../Home/components/Tag";
import Loading from "../../Loading";
import marked from "marked";

function FullBlog({ blogs }) {
  const mainRef = useRef();
  const { number } = useParams();
  const [blog, setBlog] = useState(null);
  const [exit, setExit] = useState(true);

  useEffect(() => {
    setExit(blogs?.length >= parseInt(number));
    setBlog(blogs?.find((blog) => blog.number === parseInt(number)));
    if (blog) mainRef.current.innerHTML = marked(blog?.main);
  }, [blogs, number, blog]);

  console.log(blog);
  return exit ? (
    <div className={fullBlog}>
      <h1>{`#${blog?.number}`}</h1>
      <h2>{blog?.title}</h2>
      <div className={description}>{blog?.description}</div>
      <div className={readDate}>
        <p className={read}>{blog?.readTime} mins read</p>
        <p className={date}>{blog?.date}</p>
      </div>
      <div className={article} ref={mainRef}>
        <p>{blog?.main}</p>
      </div>
      <div className={tags}>
        {blog?.tags?.map((tag) => (
          <Tag data={tag} />
        ))}
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default FullBlog;
