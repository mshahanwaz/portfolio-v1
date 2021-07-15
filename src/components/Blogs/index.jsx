import React, { useEffect, useState } from "react";
import { blogs } from "../../styles/blogs.module.css";
import Blog from "./components/Blog";
import { db } from "../../firebase";
import Loading from "../Loading";

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

  if (allBlogs) {
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
  } else return <Loading />;
}

export default Blogs;
