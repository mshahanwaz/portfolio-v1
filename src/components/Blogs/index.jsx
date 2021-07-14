import React, { useEffect, useState } from "react";
import { blogs, blogContainer } from "../../styles/blogs.module.css";
import Blog from "./components/Blog";
import { db } from "../../firebase";
import FullBlog from "./components/FullBlog";

function Blogs() {
  const [allBlogs, setAllBlogs] = useState(null);

  useEffect(() => {
    db.collection("blogs")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setAllBlogs(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              blog: doc.data(),
            };
          })
        );
      });
  }, []);
  // console.log(allBlogs);
  return (
    <div className={blogs}>
      <h1>Blogs</h1>
      <div>
        {allBlogs?.map(({ blog }) => (
          <Blog blogItem={blog} />
        ))}
      </div>
    </div>
  );
}

export default Blogs;
