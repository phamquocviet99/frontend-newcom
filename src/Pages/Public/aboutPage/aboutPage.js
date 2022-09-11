import React from "react";
import BoxAbout from "../../../Components/boxAbout/BoxAbout";
import ProcessDev from "../../../Components/processDev/ProcessDev";
import "./aboutPage.css";

function AboutPage() {
  return (
    <div>
      <div className="hero-image-about"></div>
      <BoxAbout />
      <ProcessDev />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <img className="img-pic-about-1" src={require("../../../Images/pic-about1.PNG")} alt="" />
          </div>
          <div className="col-md-4">
            <img className="img-pic-about-2" src={require("../../../Images/pic-about-2.PNG")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
