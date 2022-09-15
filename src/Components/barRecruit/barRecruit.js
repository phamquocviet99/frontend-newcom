import React from "react";
import "./barRecruit.css";

function BarRecruit({ recruit }) {
  return (
    <a href={`/chi-tiet-tuyen-dung/${recruit?._id}`} className="bar-recruit">
      <img alt="" src={require("../../Images/icon-recruit.png")} />
      <div className="box-content-recruit">
        <div className="content-bar-recruit">
          <h4>{recruit.name}</h4>

          <p>Ngày đăng : {recruit?.createdAt?.slice(0, 10)} </p>
        </div>
        <div className="group-see-more-time-recruit">
          <a
            href={`/chi-tiet-tuyen-dung/${recruit?._id}`}
            style={{ color: "white" }}
            className="btn btn-primary"
          >
            XEM THÊM
          </a>
        </div>
      </div>
    </a>
  );
}

export default BarRecruit;
