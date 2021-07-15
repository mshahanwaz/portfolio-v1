import React from "react";
import { spinner, loader } from "../styles/loading.module.css";

function Loading() {
  return (
    <div className={loader}>
      <span className={spinner}></span>
    </div>
  );
}

export default Loading;
