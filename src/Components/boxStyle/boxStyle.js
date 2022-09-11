import React from "react";
import "./boxStyle.css";

function BoxStyle() {
  return (
    <div className="box-style">
      <img alt="" src={require("../../Images/img20170320085553667.webp")} />

      <h3>PHONG CÁCH NỘI THẤT SỬ DỤNG MÂY</h3>
      <p>Ngày đăng : 27/2/2022</p>
      <h5>
        Cuộc sống hối hả, buộc chúng ta phải chạy đua hùng hục với công việc của
        mình, căng thẳng và áp lực là những thứ mà ta phải trải qua. Nhưng chắc
        chắn vẫn còn rất...
      </h5>
      <div href="/chi-tiet-bai-viet" className="box-a-style">
        <a href="/chi-tiet-bai-viet">Xem thêm </a>
      </div>
    </div>
  );
}

export default BoxStyle;
