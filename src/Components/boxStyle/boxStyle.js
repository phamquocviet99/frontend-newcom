import { Markup } from "interweave";
import React from "react";
import "./boxStyle.css";

function BoxStyle({ news }) {
  return (
    
    <div className="box-style">
      <img alt="" src={news?.urlImage} />

      <h3 className="limit-txt-name">{news?.name}</h3>
      <div className="line-news mb-2"></div>
      <p>Posted on : {news?.createdAt?.slice(0, 10)} </p>
      <h5>
        <Markup className="limit-txt-name" content={news?.content}></Markup>
      </h5>
      <div href={`/chi-tiet-bai-viet/${news._id}`} className="box-a-style">
        <a href={`/chi-tiet-bai-viet/${news._id}`}>See more</a>
      </div>
    </div>
  );
}

export default BoxStyle;
