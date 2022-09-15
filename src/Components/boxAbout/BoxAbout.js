import React from "react";
import { translate } from "react-redux-multilingual/lib/utils";
import "./BoxAbout.css";
import { withTranslate } from 'react-redux-multilingual'
function BoxAbout(props) {
  const { translate } = props;
  return (
    <div className="container">
      <div className="content-box-about"></div>
      <div className="row">
        <div className="col-md-6">
          <div className="box-image-about">
            <img data-aos="fade-down"
        data-aos-duration="2000"
              className="img-box-about-1"
              alt=""
              src={require("../../Images/box-about-2.webp")}
            ></img>
            <img
            data-aos="fade-up"
            data-aos-duration="2000"
              className="img-box-about-2"
              alt=""
              src={require("../../Images/box-about-1.jpg")}
            ></img>
          </div>
          <img
          data-aos="fade-right"
          data-aos-duration="2000"
            className="img-box-about-3"
            alt=""
            src={require("../../Images/box-about3.webp")}
          ></img>
        </div>
        <div data-aos="fade-left"
        data-aos-duration="2000" className="col-md-6">
          <div className="box-about-page">
            <h2>{translate('aboutUs')}</h2>
            <p>
            {translate('contentAbout1')}
            </p>
            <p>
            {translate('contentAbout2')}
            </p>
            <p>
            {translate('contentAbout3')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withTranslate(BoxAbout);
