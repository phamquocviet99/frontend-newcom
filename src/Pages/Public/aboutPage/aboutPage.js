import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import PartnerApi from "../../../Apis/PartnerApi";
import BoxAbout from "../../../Components/boxAbout/BoxAbout";
import ProcessDev from "../../../Components/processDev/ProcessDev";
import "./aboutPage.css";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import { useParams } from "react-router-dom";
import { withTranslate } from 'react-redux-multilingual'

function AboutPage(props) {
  const { translate } = props;
  const carousel = useRef();
  const [widthh, setWidth] = useState(0);
  const [listPartner, setListPartner] = useState([]);
  const params = useParams();
  useEffect(() => {
    document.title=translate('about');
    Aos.init({ duration: 2000 });
  }, [params]);
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
  }, []);
  return (
    <div>
      <div className="hero-image-about"></div>
      <BoxAbout />
      <div className="container">
        <p>
         {translate('whoWeAre')}
        </p>
      </div>

      <ProcessDev />
      <div className="container">
        <div className="row">
          <div
            data-aos="fade-right"
            data-aos-duration="2500"
            className="col-md-8"
          >
            <img
              className="img-pic-about-1"
              src={require("../../../Images/pic-about1.jpg")}
              alt=""
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2500"
            className="col-md-4"
          >
            <img
              className="img-pic-about-2"
              src={require("../../../Images/pic-about-2.PNG")}
              alt=""
            />
          </div>
        </div>
      </div>
     
      <article className="about-doitac">
        <div className="container">
          <div className="title-about">
            {listPartner.length>0?(<h3 className="font-title text-center">
              {translate('partner')}
            </h3>):(<></>)}
            
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
              {listPartner?.map((p, index) => (
                <motion.div key={index} className="item-img-partnerr">
                  <img alt={p.nameImage} src={p?.urlImage}></img>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </article>
    </div>
  );
}

export default withTranslate(AboutPage);
