import { React, useState, useEffect } from "react";
import "./footer.css";
import InformationApi from "../../Apis/InformationApi";

function Footer() {
  const [information, setInformation] = useState({});
  useEffect(() => {
    const fetchInformation = async () => {
      try {
        const response = await InformationApi.getById(
          "631ad84a127721f9a7b6ed71"
        );
        const data = JSON.parse(JSON.stringify(response));

        if (!data.error) {
          setInformation(data.inforCompany);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchInformation();
  }, []);
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
                    Địa chỉ : {information?.address}
                  </h6>
                  <h6>Hotline : {information?.phone}</h6>
                  <h6>Email : {information?.email}</h6>
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-footer">
                  <div className="second-about-footer">
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
                  <div className="first-about-footer">
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
