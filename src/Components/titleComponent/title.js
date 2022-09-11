import React from "react";
import "./title.css";

function Title({ title }) {
  return (
    <div className="container">
      <div className="text-title">
        <h3>{title}</h3>
        <div></div>
      </div>
    </div>
  );
}

export default Title;
