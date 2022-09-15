import React from "react";
import "./boxStyleHome.css";

function BoxStyleHome({ news }) {
  return (
    <a href={`/chi-tiet-bai-viet/${news?._id}`} className="box-style-home">
      <img alt="" src={news?.urlImage} />
      
      <div className="content-style-home">
        <h3>{news?.name}</h3>
        <p>Ngày đăng : {news?.createdAt?.slice(0, 10)}</p>
      </div>
      <a
        href={`/chi-tiet-bai-viet/${news?._id}`}
        className="decor-box-style-home"
      >
        <p>MORE</p>
      </a>
    </a>
  );
}

export default BoxStyleHome;
