import React from "react";
import { blogs, blogContainer } from "../../styles/blogs.module.css";
import Blog from "./components/Blog";

function Blogs() {
  return (
    <div className={blogs}>
      <h1>Blogs</h1>
      <div>
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </div>
    </div>
  );
}

export default Blogs;
