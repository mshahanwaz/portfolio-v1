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

function FullBlog() {
  return (
    <div className={fullBlog}>
      <h1>#2102983</h1>
      <h2>Full Blog content</h2>
      <div className={readDate}>
        <p className={read}>2 mins read</p>
        <p className={date}>31 Dec, 2021</p>
      </div>
      <div className={article}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quaerat
          quod dolores ad? Totam amet omnis eaque velit quibusdam perferendis,
          maxime, at mollitia reiciendis, magni est suscipit veritatis nulla
          aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Praesentium atque omnis rem aspernatur at vitae sunt hic quaerat
          minima numquam? Est obcaecati earum, sunt a ipsam assumenda officia
          nostrum in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Cumque perferendis, mollitia corrupti reiciendis asperiores laborum
          nisi harum est, aliquam voluptate assumenda aspernatur delectus in
          iusto dignissimos commodi qui veritatis ducimus?
        </p>
      </div>
      <div className={tags}>
        <Tag data={"hello"} />
        <Tag data={"hello"} />
        <Tag data={"hello"} />
      </div>
    </div>
  );
}

export default FullBlog;
