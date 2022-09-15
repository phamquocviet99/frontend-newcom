import React from "react";
import "./ProcessDev.css";
import { withTranslate } from 'react-redux-multilingual'
function ProcessDev(props) {
  const { translate } = props;
  return (
    <div className="container">
      <div className="title-about">
        <h3 className="font-title text-center">
          {translate('process')}
        </h3>
      </div>
      <div className="bar-process">
        <div
        data-aos="fade-right"
        data-aos-duration="2000"
          style={{ backgroundColor: "#ca7f3d" }}
          className="sub-bar-process-1"
        >
          <h3>2006</h3>
          <div className="content-bar">
            <div className="content-sub-bar">
              <div></div>
              <p>{translate('worker')} : 50</p>
            </div>
            <div style={{ height: "20px" }}></div>
            <div className="content-sub-bar">
              <div></div>
              <p>{translate('size')} : 500m2 </p>
            </div>
          </div>
        </div>
        <div  data-aos="fade-left"
        data-aos-duration="2000" className="group-sub-bar-process-2">
          <div
            style={{ backgroundColor: "#ffb371" }}
            className="sub-bar-process-2"
          >
            <h3>2008</h3>
            <div className="content-bar">
              <div className="content-sub-bar">
                <div></div>
                <p>{translate('worker')}: 50 </p>
              </div>
              <div style={{ height: "20px" }}></div>
              <div className="content-sub-bar">
                <div></div>
                <p>{translate('size')}: 500m2</p>
              </div>
            </div>
          </div>
          <div
           data-aos="fade-left"
           data-aos-duration="2000"
            style={{ backgroundColor: "#ffc18a" }}
            className="sub-bar-process-3"
          >
            <h3>2010</h3>
            <div className="content-bar">
              <div className="content-sub-bar">
                <div></div>
                <p>1 Showroom</p>
              </div>
              <div style={{ height: "20px" }}></div>
              <div className="content-sub-bar">
                <div></div>
                <p>{translate('size')}: 10.000m2 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bar-process">
        <div  data-aos="fade-right"
        data-aos-duration="2000" className="group-sub-bar-process-2 fix-width">
          <div
            style={{ backgroundColor: "#18DFEF" }}
            className="sub-bar-process-2 fix"
          >
            <h3>2013</h3>
            <div className="content-bar">
              <div className="content-sub-bar">
                <div></div>
                <p>2 Showroom</p>
              </div>
              <div style={{ height: "20px" }}></div>
              <div className="content-sub-bar">
                <div></div>
                <p>{translate('size')}: 10.000m2 </p>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#0AB9C7" }}
            className="sub-bar-process-3 fix"
          >
            <h3>2016</h3>
            <div className="content-bar">
              <div className="content-sub-bar">
                <div></div>
                <p>{translate('worker')}: 200</p>
              </div>
              <div style={{ height: "20px" }}></div>
              <div className="content-sub-bar">
                <div></div>
                <p>{translate('size')}: 20.000m2 </p>
              </div>
            </div>
          </div>
        </div>
        <div
        data-aos="fade-left"
        data-aos-duration="2000"
          style={{ backgroundColor: "#2C838A" }}
          className="sub-bar-process-1 fix-width"
        >
          <h3>2021</h3>
          <div className="content-bar">
            <div className="content-sub-bar">
              <div></div>
              <p>{translate('worker')}: +220</p>
            </div>
            <div style={{ height: "20px" }}></div>
            <div className="content-sub-bar">
              <div></div>
              <p>{translate('size')}: 30.000m2 </p>
            </div>
          </div>
          <div className="content-bar">
            <div className="content-sub-bar">
              <div></div>
              <p>40*40HC conts/{translate('month')}</p>
            </div>
            <div style={{ height: "20px" }}></div>
            <div className="content-sub-bar">
              <div></div>
              <p>{translate('usd')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withTranslate(ProcessDev);
