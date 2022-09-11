import React from "react";
import "./BoxAbout.css";

function BoxAbout() {
  return (
    <div className="container">
      <div className="content-box-about"></div>
      <div className="row">
        <div className="col-md-6">
          <div className="box-image-about">
            <img className="img-box-about-1" alt="" src={require("../../Images/box-about-2.webp")}></img>
            <img className="img-box-about-2" alt="" src={require("../../Images/box-about-1.jpg")}></img>
          </div>
          <img className="img-box-about-3" alt="" src={require("../../Images/box-about3.webp")}></img>
        </div>
        <div className="col-md-6">
          <div className="box-about-page">
            <h2>VỀ CHÚNG TÔI</h2>
            <p>
              Công ty TNHH Tổng Hợp Ngân Hà chuyên sản xuất, thiết kế, xuất khẩu
              đồ nội thất sử dụng vật liệu nhựa giả mây, lục bình... trong nước
              và quốc tế.
            </p>
            <p>
              Các sản phẩm chúng tôi sử dụng công nghệ tân tiến, hiện đại nhất
              trong việc sơn phủ bề mặt vật liệu, các sản phẩm vượt trội của
              chúng tôi như ghế xích đu chất lượng cao, ghế sofa ngoài trời, ghế
              dài, bộ bàn ghế phòng ăn. Các bộ sưu tập bằng mây, liễu gai của
              chúng tôi phù hợp tương thích cho các khu vườn, nhà hàng, khách
              sạn cao cấp hoặc các khu nghỉ dưỡng chất lượng cao...
            </p>
            <p>
              Chúng tôi tự hào là đối tác của vải Sunbrella - vải ngoài trời cao
              cấp. Nhận thấy rằng mỗi khách hàng đều có sở thích, phong cách
              riêng biệt, vì thế chúng tôi tự hào rằng công ty cung cấp những
              giải pháp, bản thiết kế cho quý khách hàng để biến ý tưởng thành
              sản phẩm hiện thực.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxAbout;
