import React from "react";
import { Link } from "react-router-dom";
import "./boxStyleRight.css";

function BoxStyleRight({ news }) {
  return (
    <a href={`/chi-tiet-bai-viet/${news._id}`}>
      <div className="box-style-right">
        <img alt="" src={news?.urlImage} />
        <h3>{news?.name}</h3>
      </div>
    </a>
  );
}

export default BoxStyleRight;
