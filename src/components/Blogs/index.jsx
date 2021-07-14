import React, { useEffect, useState } from "react";
import { blogs } from "../../styles/blogs.module.css";
import Blog from "./components/Blog";
import { db } from "../../firebase";

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
  return (
    <div className={blogs}>
      <h2>Blogs</h2>
      <div>
        {allBlogs?.map(({ blog }) => (
          <Blog blogItem={blog} />
        ))}
      </div>
    </div>
  );
}

export default Blogs;
