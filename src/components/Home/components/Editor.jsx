import React, { useEffect, useState } from "react";
import {
  editor,
  top,
  red,
  yellow,
  green,
  address,
  mid,
  lights,
  nopad,
} from "../../../styles/editor.module.css";

function Editor({ text, username }) {
  useEffect(() => {
    document.querySelector("div section").innerHTML = text;
  }, [text]);

  return (
    <div className={editor}>
      <div className={top}>
        <div className={lights}>
          <span className={red}></span>
          <span className={yellow}></span>
          <span className={green}></span>
        </div>
        <div className={address}>~/Users/{username}/v1</div>
      </div>
      <div className={mid}>
        <section></section>
      </div>
    </div>
  );
}

export default Editor;
