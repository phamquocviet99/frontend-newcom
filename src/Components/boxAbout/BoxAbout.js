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
              src="https://firebasestorage.googleapis.com/v0/b/galaxy-synthetic-company.appspot.com/o/images%2Fimage%2Fistockphoto-1205984990-612x612.jpg?alt=media&token=de204af0-64f4-4e16-97c7-e0faa6347c97"
            ></img>
            <img
            data-aos="fade-up"
            data-aos-duration="2000"
              className="img-box-about-2"
              alt=""
              src="https://firebasestorage.googleapis.com/v0/b/galaxy-synthetic-company.appspot.com/o/images%2Fimage%2Foutsunny-patio-conversation-sets-860-020v01gy-76_600.jpg?alt=media&token=5675b23f-8a99-4f80-b1d3-2c8d56fd28ea"
            ></img>
          </div>
          <img
          data-aos="fade-right"
          data-aos-duration="2000"
            className="img-box-about-3"
            alt=""
            src="https://firebasestorage.googleapis.com/v0/b/galaxy-synthetic-company.appspot.com/o/images%2Fimage%2F6970857fd25b268e99c4d711abff4768.png?alt=media&token=16854591-634e-4143-b2b5-371deccf7cc5"
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
