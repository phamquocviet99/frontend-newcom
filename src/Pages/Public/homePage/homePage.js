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
import CategoryProductApi from "../../../Apis/CategoryProductApi";



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
  const [listCategory, setListCategory] = useState([]);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [carousel]);
  useEffect(() => {
    const FetchListCategory = async () => {
      try {
        const response = await CategoryProductApi.getAll();
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          setListCategory(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    FetchListCategory();
  }, []);
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
        <Carousel.Item interval={4000}>
          <div className="carousel-inner">
            <div className="item active">
              <img src={require("../../../Images/IO.png")} alt="Chania" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <div className="carousel-inner ">
            <div className="item active">
              <img src={require("../../../Images/homeImage/Video-Homepagina-Promotie-1280x700-1.jpg")} alt="Chania" />
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
                  src={require("../../../Images/homeImage/home1.jpg")}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </article>
      <div>
        <article>
          <div className="container">
            <div className="row">
              <div

                className="col-md-8 col-xs-12"
                style={{ padding: "0px" }}
              >
                <img
                  className="img-homepage-left"
                  alt=""
                  src={require("../../../Images/homeImage/2021_Apple-Bee_Bijou-Dining_Website-2560x1400_001-1280x530-1.jpg")}
                ></img>
              </div>
              <div

                className="col-md-4 col-xs-12"
              >
                <img
                  className="img-homepage-right"
                  alt=""
                  src={require("../../../Images/homeImage/soidan.jpg")}
                ></img>
              </div>
            </div>
          </div>
        </article>
        <article>
          <div className="container-ma">
            <div className="background-mask-home">
              <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-6">
                  <div className="content-mask-home text-center">
                    <h3>GALAXY
                      Technology
                    </h3>
                    <p>Galaxy furniture
                      is made of the highest
                      quality materials.
                      The same certainly applies to the cushions. Our Galaxy range consists of special weather-resistant cushions that you can simply leave outside. The removable covers are all washable.</p>
                    <a className="box-see-more" href="/" >See more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>


      <div style={{ padding: "0" }}>
        <div className="content-cate-home">
          <div className="row">
            <div className="col-md-4">
              <div className="who-we text-center">
                <h3>Who we are</h3>
                <div>
                  <div className="line-we-who"></div>
                </div>

                <p>At its outset, Galaxy started as a hardware manufacturer specialist for wooden furniture, but in 2008, the official switch is made to focus on the production of an outdoor & indoor furniture brand. A furniture brand with a unique design was born in the Vietnam then.</p>
                <a className="box-see-more" href="/" >See more</a>
              </div>
            </div>
            <div className="col-md-8">

              <div className="under-box-cate-right">
                <img
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  alt=""
                  src={require("../../../Images/pic-about1.jpg")}
                />
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="hi-quality-home ">
        <div className="mask-content-hi-quality text-center">
          <div className="content-hi-quality text-center"><h3>The high-quality <br /> materials<br />
            that we use
          </h3><p>Choosing quality means choosing
            the best materials. We think that goes
            without saying. That’s why we use high-
            quality aluminium, firm rope wicker
            cord, our recyclable & comfortable
            cushions. The wood that we use,
            grows in sustainably managed and controlled plantations, and it is certified.</p>
          </div>


        </div>

      </div>
      <article>
        <div className="container">
          <div className="style-home">
            <div className="content-title-home">
              <h3> {translate('news')}</h3>
              <p>Discover the exclusive outdoor & indoor furniture collections of Galaxy</p>
            </div>



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
            <div className="content-title-home">
              <h3> {translate('product')}</h3>
              <p>View the different categories of our  furniture here.</p>
            </div>

            <div className="row">
              {listCategory?.map((c, index) => (
                <div
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="col-md-4"
                >
                  <BoxProduct
                    product={{
                      urlImage:
                        c?.avatar?.url,
                      name: c?.name,
                    }}
                  />
                </div>
              ))}


            </div>
          </div>
        </div>
      </article>
      <article>
        <div className="container">
          <div className="product-home">

            <div className="content-title-home">
              <h3> {translate('reviews')}</h3>
              <p>Customer reviews help you make the right choice.</p>
            </div>
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

            </motion.div>
          </motion.div>
        </div>
      </article>

    </div>
  );
}

export default withTranslate(HomePage);
