import React from "react";
import { tag } from "../../../styles/tag.module.css";

function Tag({ data }) {
  return (
    <div className={tag}>
      <code>{data}</code>
    </div>
  );
}

export default Tag;
