import React from "react";
import "./stylePage.css";
import Title from "../../../Components/titleComponent/title";
import BoxStyle from "../../../Components/boxStyle/boxStyle";

function StylePage() {
  return (
    <div>
      <div className="hero-image-style"></div>
      <Title title="BÀI VIẾT & PHONG CÁCH" />
      <div className="container">
        <div className="row ">
          <div className="col-md-4 col-sm-6">
            <BoxStyle />
          </div>
          <div className="col-md-4 col-sm-6">
            <BoxStyle />
          </div>
          <div className="col-md-4 col-sm-6">
            <BoxStyle />
          </div>
          <div className="col-md-4 col-sm-6">
            <BoxStyle />
          </div>
          <div className="col-md-4 col-sm-6">
            <BoxStyle />
          </div>
          <div className="col-md-4 col-sm-6">
            <BoxStyle />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StylePage;
