import React from "react";
import { BiTimeFive } from "react-icons/bi";
import BoxRecruit from "../../../Components/boxRecruit/boxRecruit";
import "./detailRecruitPage.css";

function DetailRecruitPage() {
  return (
    <div style={{ backgroundColor: "#e8e8e8" }}>
      <div className="hero-image-recruit"></div>
      <div className="container">
        <div className="title-recruit">
          <h3>
            Tin tuyển dụng <span>mới nhất</span>
          </h3>
          <div />
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="content-detail-recruit">
              <h3>Tuyển kỹ sử lsdkhjdhksdsjdhsjd</h3>
              <div className="time-detail">
                <BiTimeFive style={{ fontSize: "20px" }} />
                <p>9:9 - 2022</p>
              </div>
              <div style={{ display: "flex", justifyContent: "end" }}>
                <div className="line-detail"></div>
              </div>
              <div>
                Công ty chúng tôi hoạt động trong môi trường chuyên nghiệp, đào
                tạo nhân lực, và sử dụng những trang thiết bị bậc nhất. Với chế
                độ đãi ngộ tốt với các thành viên công ty, hiện số lượng các kỹ
                sư hơn 200 thành viên.
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <BoxRecruit />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailRecruitPage;
