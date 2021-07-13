import React from "react";
import { wrap } from "../styles/_404.module.css";

function _404() {
  return (
    <div className={wrap}>
      <h1>
        4<span>0</span>4
      </h1>
      <p>Not found anything on this site!</p>
      <p>Hope you find your way.</p>
    </div>
  );
}

export default _404;
