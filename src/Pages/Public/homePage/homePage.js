import React from "react";
import "./homePage.css";
import { Carousel } from "react-bootstrap";
import { BsFillAwardFill, BsFillBarChartFill } from "react-icons/bs";
import { MdPeopleAlt } from "react-icons/md";
import { GiFactory } from "react-icons/gi";
import BoxProduct from "../../../Components/boxProduct/boxProduct";
function HomePage() {
  return (
    <div className="content-homepage">
      <Carousel fade>
        <Carousel.Item interval={7000}>
          <div className="carousel-inner">
            <div className="item active">
              <img src={require("../../../Images/IO.png")} alt="Chania" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={7000}>
          <div className="carousel-inner ">
            <div className="item active">
              <img src={require("../../../Images/IO.png")} alt="Chania" />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      <article>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="name-company-homepage">
                <h2>GALAXY SYNTHETIC COMPANY</h2>
                <h3>Outdoor & Indoor Furniture</h3>
                <div></div>
              </div>
              <div className="content-about-homepage">
                <i />
                <p>
                  Công ty chúng tôi chuyên sản suất đồ gỗ nội thất và ngoài thất
                  hàng đầu tại Việt Nam chúng tôi cung cấp các giải pháp tối ưu,
                  độ thẩm mỹ cao và chất lượng vượt trội với các thiết kế chuẩn
                  quốc tế.
                </p>
              </div>
              <div className="content-about-homepage">
                <i />
                <p>
                  Các sản phẩm chúng tôi sử dụng công nghệ tân tiến, hiện đại
                  nhất trong việc sơn phủ bề mặt vật liệu, các sản phẩm vượt
                  trội của chúng tôi như ghế xích đu chất lượng cao, ghế sofa
                  ngoài trời, ghế dài, bộ bàn ghế phòng ăn. Các bộ sưu tập bằng
                  mây, liễu gai của chúng tôi phù hợp tương thích cho các khu
                  vườn, nhà hàng, khách sạn cao cấp hoặc các khu nghỉ dưỡng chất
                  lượng cao...
                </p>
              </div>
              <div className="content-about-homepage">
                <i />
                <p>
                  Quý khách có thể đặt hàng với các mẫu thiết kế theo sở thích
                  cá nhân để phù hợp và thoải mái, chúng tôi sẽ giúp bạn hiện
                  thực những ý tưởng tuyệt vời mà bạn đang có thành những sản
                  phẩm thực, hãy liên hệ chúng tôi.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box-about">
                <img
                  className="img-about"
                  alt=""
                  src={require("../../../Images/img-about.webp")}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <img
                className="img-homepage-left"
                alt=""
                src={require("../../../Images/img-home-left.webp")}
              ></img>
            </div>
            <div className="col-md-4">
              <img
                className="img-homepage-right"
                alt=""
                src={require("../../../Images/img-home-right.jpg")}
              ></img>
            </div>
          </div>
        </div>
      </article>
      <article style={{ backgroundColor: "#F4F4F4" }}>
        <div className="container">
          <h3 style={{ color: "#007049" }} className="font-title text-center">
            NHỮNG GÌ CHÚNG TÔI CÓ
          </h3>
          <div className="row">
            <div className="col-md-3">
              <div className="circle-icon-home">
                <BsFillAwardFill className="icon-home" />
              </div>
              <div className="box-txt-icon">
                <h4 style={{ color: "#007049" }}>
                  Hơn 15 năm trong lĩnh vực thi công, sản xuất.
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="circle-icon-home">
                <BsFillBarChartFill className="icon-home" />
              </div>
              <div className="box-txt-icon">
                <h4 style={{ color: "#007049" }}>
                  Xuất nhập khẩu hơn 40 container mỗi tháng
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="circle-icon-home">
                <MdPeopleAlt className="icon-home" />
              </div>
              <div className="box-txt-icon">
                <h4 style={{ color: "#007049" }}>
                  Hơn 200 kỹ sư chuyên nghiệp làm việc.
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="circle-icon-home">
                <GiFactory className="icon-home" />
              </div>
              <div className="box-txt-icon">
                <h4 style={{ color: "#007049" }}>
                  Diện tích nhà máy hơn 30.000 mét vuông.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </article>
      <div style={{ height: "50px" }} />
      <article style={{ padding: "0" }}>
        <div className="content-cate-home">
          <div className="row">
            <div className="col-md-6">
              <div className="box-cate-left">
                <div className="content-box-cate-left">
                  <img
                    alt=""
                    src={require("../../../Images/left-cate-img.PNG")}
                  ></img>
                  <div className="content-cate-left">
                    <h4>Bộ ghế Sofa</h4>
                    <p>
                      Với các kiểu dáng thiết kế thanh lịch, những bộ ghế sofa
                      của chúng tôi là sự kết hợp giữa nguyên vật liệu cao cấp
                      và kỹ thuật của những kỹ sư có kinh nghiệm lâu năm trong
                      nghề tạo nên những tuyệt tác đẹp mắt với sự dễ chịu của
                      quý khách khi sử dụng. Chỉ cần ngồi vào quý khách sẽ cảm
                      thấy thoải mái, loại bỏ đi mọi căng thẳng lo âu.
                    </p>
                  </div>
                </div>
                <div className="content-box-cate-left">
                  <img
                    alt=""
                    src={require("../../../Images/Noi-that-may-tre-dan-2.jpg")}
                  ></img>
                  <div className="content-cate-left">
                    <h4>Bộ bàn ăn</h4>
                    <p>
                      Bất kể là một buổi tối lãng mạn giữa hai người, hay những
                      buổi tiệc tùng, hợp mặt của gia đình để ăn uống, vui chơi
                      thì những bộ thiết kế bàn ăn của chúng tôi tạo cho quý
                      khách sự thoải mái, tự nhiên và sự dễ chịu khi dùng bữa.
                      Quý khách sẽ tìm thấy được các bộ ghế phù hợp với nhu cầu,
                      phong cách của mình trong thời gian ngắn nhất khi đến với
                      chúng tôi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="box-cate-right">
                <div className="under-box-cate-right">
                  <img alt="" src={require("../../../Images/exteta.jpg")} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <div className="factory-home">
        <div className="container">
          <div className="factory-home-content">
            <h3 style={{ color: "#5d9090" }} className="font-title">
              NHÀ MÁY SẢN XUẤT CỦA CHÚNG TÔI
            </h3>
            <div className="row">
              <div className="col-md-4">
                <div className="bar-img-factory-1">
                  <img alt="" src={require("../../../Images/warehouse.jpg")} />
                  <img
                    alt=""
                    src={require("../../../Images/warehouse-1.jpg")}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="bar-img-factory-2">
                  <img alt="" src={require("../../../Images/company.jpg")} />
                </div>
              </div>
              <div className="col-md-4">
                <div className="bar-img-factory-1">
                  <img alt="" src={require("../../../Images/fac-1.PNG")} />
                  <img alt="" src={require("../../../Images/fac-2.PNG")} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <article>
        <div className="container">
          <div className="product-home">
            <h3 style={{ color: "#5d9090" }} className="font-title">
              CÁC DÒNG SẢN PHẨM CỦA CHÚNG TÔI
            </h3>

            <div className="row">
              <div className="col-md-3">
                <BoxProduct />
              </div>
              <div className="col-md-3">
                <BoxProduct />
              </div>
              <div className="col-md-3">
                <BoxProduct />
              </div>
              <div className="col-md-3">
                <BoxProduct />
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default HomePage;
