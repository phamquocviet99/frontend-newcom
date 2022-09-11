import React from "react";
import BarRecruit from "../../../Components/barRecruit/barRecruit";
import BoxRecruit from "../../../Components/boxRecruit/boxRecruit";
import "./recruitPage.css";

function RecruitPage() {
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
            <div className="list-recruit">
              <BarRecruit />
              <BarRecruit />
              <BarRecruit />
              <BarRecruit />
              <BarRecruit />
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

export default RecruitPage;
