import React from "react";
import "./barRecruit.css";

function BarRecruit() {
  return (
    <div className="bar-recruit">
      <img alt="" src={require("../../Images/icon-recruit.png")} />
      <div className="box-content-recruit">
        <div className="content-bar-recruit">
          <h4>Kỹ sư thiết kế bàn ghế</h4>
          <h5>Mức lương : 7 triệu - 12 triệu</h5>
          <p>Làm việc Full-time</p>
        </div>
        <div className="group-see-more-time-recruit">
          <a href="/chi-tiet-tuyen-dung" style={{color:"white"}} className="btn btn-primary">XEM THÊM</a>
        </div>
      </div>
    </div>
  );
}

export default BarRecruit;
