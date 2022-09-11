import React from "react";
import "./boxStyleHome.css";

function BoxStyleHome() {
  return (
    <div className="box-style-home">
      <img
        alt=""
        src={require("../../Images/infinity-chaise-longue-ambient-01-293837_800x.webp")}
      />
      <div className="content-style-home">
        <h3>Elvis Phương - Tình Khúc Vượt Thời Gian</h3>
        <p>Ngày đăng : 27/2/2022</p>
      </div>
      <a href="/" className="decor-box-style-home">
        <p>MORE</p>
      </a>
    </div>
  );
}

export default BoxStyleHome;
