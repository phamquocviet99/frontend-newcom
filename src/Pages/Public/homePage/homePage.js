import React from "react";
import "./homePage.css";
import { Carousel } from "react-bootstrap";
import { BsFillAwardFill, BsFillBarChartFill } from "react-icons/bs";
import { MdPeopleAlt } from "react-icons/md";
import { GiFactory } from "react-icons/gi";
import BoxProduct from "../../../Components/boxProduct/boxProduct";
import BoxStyleHome from "../../../Components/boxStyleHome/boxStyleHome";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";

import { withTranslate } from 'react-redux-multilingual'
import { useState, useRef, useEffect } from "react";

import PartnerApi from "../../../Apis/PartnerApi";
import { useParams } from "react-router-dom";
import NewsApi from "../../../Apis/NewsApi";



function HomePage(props) {
  const { translate } = props;
  const params = useParams();

  useEffect(() => {
    document.title = translate('homepage');
    Aos.init({ duration: 2000 });
  }, [params]);
  const carousel = useRef();
  const [widthh, setWidth] = useState(0);
  const [listPartner, setListPartner] = useState([]);
  const [listNews, setListNews] = useState([]);
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [carousel]);
  useEffect(() => {
    const FetchFullPartner = async () => {
      try {
        const response = await PartnerApi.getAll();
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          setListPartner(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    FetchFullPartner();
    const FetchNews = async () => {
      try {
        const response = await NewsApi.getAll({
          limit: 6,
          page: 0,
        });
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          setListNews(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    FetchNews();
  }, []);



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
               
                <h2>{translate('nameCompany')}</h2>
                <h3>Outdoor & Indoor Furniture</h3>
                <div></div>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="1500"
                className="content-about-homepage"
              >
                <i />
                <p>
                  {translate('contentHome1')}
                </p>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="2000"
                className="content-about-homepage"
              >
                <i />
                <p>
                 {translate("contentHome2")}
                </p>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="2500"
                className="content-about-homepage"
              >
                <i />
                <p>
                {translate("contentHome3")}
                </p>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="col-md-4"
            >
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
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="col-md-8 "
              style={{ padding: "0px" }}
            >
              <img
                className="img-homepage-left"
                alt=""
                src={require("../../../Images/img-home-left.webp")}
              ></img>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="col-md-4"
            >
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
            {translate('weHave')}
          </h3>
          <div className="row">
            <div className="col-md-3">
              <div className="circle-icon-home">
                <BsFillAwardFill className="icon-home" />
              </div>
              <div className="box-txt-icon">
                <h4 style={{ color: "#007049" }}>
                 {translate('have1')}
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="circle-icon-home">
                <BsFillBarChartFill className="icon-home" />
              </div>
              <div className="box-txt-icon">
                <h4 style={{ color: "#007049" }}>
                {translate('have2')}
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="circle-icon-home">
                <MdPeopleAlt className="icon-home" />
              </div>
              <div className="box-txt-icon">
                <h4 style={{ color: "#007049" }}>
                {translate('have3')}
                </h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="circle-icon-home">
                <GiFactory className="icon-home" />
              </div>
              <div className="box-txt-icon">
                <h4 style={{ color: "#007049" }}>
                {translate('have4')}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article style={{ padding: "0" }}>
        <div className="content-cate-home">
          <div className="row">
            <div className="col-md-6">
              <div className="box-cate-left">
                <div
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  className="content-box-cate-left"
                >
                  <img
                    alt=""
                    src={require("../../../Images/left-cate-img.PNG")}
                  ></img>
                  <div className="content-cate-left">
                    <h4>{translate('setSofa')}</h4>
                    <p>
                    {translate('contentSofa')}
                    </p>
                  </div>
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  className="content-box-cate-left"
                >
                  <img
                    alt=""
                    src={require("../../../Images/Noi-that-may-tre-dan-2.jpg")}
                  ></img>
                  <div className="content-cate-left">
                    <h4>{translate('setDinner')}</h4>
                    <p>
                    {translate('contentDinner')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="box-cate-right">
                <div className="under-box-cate-right">
                  <img
                    data-aos="fade-left"
                    data-aos-duration="2000"
                    alt=""
                    src={require("../../../Images/exteta.jpg")}
                  />
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
              {translate('factory')}
            </h3>
            <div className="row">
              <div
                data-aos="fade-right"
                data-aos-duration="2000"
                className="col-md-4"
              >
                <div className="bar-img-factory-1">
                  <img alt="" src={require("../../../Images/warehouse.jpg")} />
                  <img
                    alt=""
                    src={require("../../../Images/warehouse-1.jpg")}
                  />
                </div>
              </div>
              <div
                data-aos="fade-down"
                data-aos-duration="2000"
                className="col-md-4"
              >
                <div className="bar-img-factory-2">
                  <img alt="" src={require("../../../Images/company.jpg")} />
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="2000"
                className="col-md-4"
              >
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
          <div className="style-home">
            <h3 style={{ color: "#5d9090" }} className="font-title">
              {translate('news')}
            </h3>
            <div>
              <div className="row">
                <div
                  data-aos="fade-right"
                  data-aos-duration="2500"
                  className="col-md-6"
                >
                  <BoxStyleHome news={listNews[0]} />
                  <BoxStyleHome news={listNews[1]} />
                  <BoxStyleHome news={listNews[2]} />
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-duration="2500"
                  className="col-md-6"
                >
                  <BoxStyleHome news={listNews[3]} />
                  <BoxStyleHome news={listNews[4]} />
                  <BoxStyleHome news={listNews[5]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article style={{ backgroundColor: "#F4F4F4" }}>
        <div className="container">
          <div className="product-home">
            <h3 style={{ color: "#5d9090" }} className="font-title">
             {translate('product')}
            </h3>

            <div className="row">
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="col-md-3"
              >
                <BoxProduct
                  product={{
                    urlImage:
                      "https://firebasestorage.googleapis.com/v0/b/galaxy-synthetic-company.appspot.com/o/images%2Fimage%2Fproduct1.jpg?alt=media&token=f67f5a27-f237-4714-a3d4-9570f4203a29",
                    name: "7-PIECE PATIO DINING SET",
                  }}
                />
              </div>
              <div
                data-aos="fade-down"
                data-aos-duration="2000"
                className="col-md-3"
              >
                <BoxProduct  product={{
                    urlImage:
                      "https://firebasestorage.googleapis.com/v0/b/galaxy-synthetic-company.appspot.com/o/images%2Fimage%2Fproduct2.jpg?alt=media&token=12f97510-3bad-4add-8b5f-110dba226ab4",
                    name: "BIJOU DINING",
                  }} />
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="col-md-3"
              >
                <BoxProduct  product={{
                    urlImage:
                      "https://firebasestorage.googleapis.com/v0/b/galaxy-synthetic-company.appspot.com/o/images%2Fimage%2Fproduct3.jpg?alt=media&token=aa3306a7-96b0-412b-bddb-ecc9a83eeaa6",
                    name: "CONDOR DINNING",
                  }} />
              </div>
              <div
                data-aos="fade-down"
                data-aos-duration="2000"
                className="col-md-3"
              >
                <BoxProduct  product={{
                    urlImage:
                      "https://firebasestorage.googleapis.com/v0/b/galaxy-synthetic-company.appspot.com/o/images%2Fimage%2Fproduct4.jpg?alt=media&token=b29fd705-9d0c-4692-af39-317aa81ed80a",
                    name: "PATIO BALCONY L SHAPE",
                  }} />
              </div>
            </div>
          </div>
        </div>
      </article>
      <article>
        <div className="container">
          <div className="product-home">
            <h3 style={{ color: "#5d9090" }} className="font-title">
              {translate('reviews')}
            </h3>
          </div>
          <motion.div
            ref={carousel}
            whileTap={"grabbing"}
            className="carousel-partnerr"
          >
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -listPartner?.length * 50 }}
              className="inner-carousel-partnerr"
            >
              <motion.div className="box-customer">
                <img alt="" src={require("../../../Images/nam.webp")} />
                <h3>Phạm Quốc Việt</h3>
                <h4>Bán hàng </h4>
                <p>
                  Khi làm việc với công ty, tôi thấy mình đúng thật là thương
                  đế, shop chúng tôi có được những sản phẩm mới.
                </p>
              </motion.div>
              <motion.div className="box-customer">
                <img alt="" src={require("../../../Images/avanam1.jpg")} />
                <h3>Trần Quốc Huy</h3>
                <h4>Công nghệ thông tin</h4>
                <p>
                  Công ty rất chuyên nghiệp, với đơn hàng lớn, công ty sản xuất
                  rất nhanh và đẹp, thời gian giao hàng chính xác.
                </p>
              </motion.div>
              <motion.div className="box-customer">
                <img alt="" src={require("../../../Images/ava1.jpg")} />
                <h3>Trương Ngọc Linh</h3>
                <h4>Sales nội thất</h4>
                <p>
                  Sản phẩm rất chất lượng, giao hàng đúng hẹn, có nhiều mẫu
                  thiết kế đẹp.
                </p>
              </motion.div>
              <motion.div className="box-customer">
                <img alt="" src={require("../../../Images/ava2.jpg")} />
                <h3>Trần Thị Ngọc Giàu</h3>
                <h4>Nhân viên văn phòng</h4>
                <p>
                  Công ty tư vấn nhiệt tình, nhờ vậy cửa hàng chúng tôi có nhiều
                  sản phẩm mới từ công ty.
                </p>
              </motion.div>
              <motion.div className="box-customer">
                <img alt="" src={require("../../../Images/avarnam5.jpg")} />
                <h3>Phan Thanh Hải</h3>
                <h4>Công nghệ thông tin</h4>
                <p>
                  Chăm sóc khách hàng rất nhiệt tình chu đáo, tôi sẽ đặt hàng
                  công ty trong những lần tiếp theo.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </article>
      
    </div>
  );
}

export default withTranslate(HomePage);
