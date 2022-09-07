import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div>
      <div className="background-footer">
        <div className="content-top-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="box-name-footer">
                  <div className="line-v-footer" />
                  <div className="name-company-footer">
                    <h3>CÔNG TY TNHH TỔNG HỢP NGÂN HÀ</h3>
                    <h4>GALAXY SYNTHETIC COMPANY</h4>
                  </div>
                </div>
                <div className="info-company-footer">
                  <h6>
                    Địa chỉ : Số 248A Phan Bội Châu, P Trần Hưng Đạo,
                    <br /> TP Qui Nhơn, Bình Định
                  </h6>
                  <h6>Hotline : 0909676848</h6>
                  <h6>Email : galaxysynthetic@gmail.com</h6>
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-footer">
                  <div className="first-about-footer">
                    <div className="bar-about-footer">
                      <div className="circle-about-footer" />
                      <p>Đồ nội thất mây, đan lát</p>
                    </div>
                    <div className="bar-about-footer">
                      <div className="circle-about-footer" />
                      <p>
                        Đồ nội thất từ lục bình, các loại vật liệu thiên nhiên
                      </p>
                    </div>
                    <div className="bar-about-footer">
                      <div className="circle-about-footer" />
                      <p>Đồ nội thất nhựa giả mây PVC</p>
                    </div>
                    <div className="bar-about-footer">
                      <div className="circle-about-footer" />
                      <p>Các loại dây</p>
                    </div>
                  </div>
                  <div className="line-footer"></div>
                  <div className="second-about-footer">
                    <div className="bar-about-footer">
                      <div className="circle-about-footer" />
                      <p>Tổng doanh thu hàng năm : 8-10 triệu USE </p>
                    </div>
                    <div className="bar-about-footer">
                      <div className="circle-about-footer" />
                      <p>Diện tích công xưởng : hơn 20.000 mét vuông</p>
                    </div>
                    <div className="bar-about-footer">
                      <div className="circle-about-footer" />
                      <p>Số lượng kỹ sư, công nhân viên : hơn 300 người</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-bot-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="bar-bot-footer">
                  <div className="infor-design-footer">
                    <p>Copyright © 2021 G.S.C, Vietnam. All Rights Reserved.</p>
                    <p>
                      Designed by <a href="/">HBB Tech</a>.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div>
            
                  <div className="box-social-footer">
                    <a href="/" className="box-cicle-facebook" />
                    <a href="/" className="box-cicle-zalo" />
                    <a href="/" className="box-cicle-google" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
