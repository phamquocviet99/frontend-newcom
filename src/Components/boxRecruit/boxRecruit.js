import React from "react";
import "./boxRecruit.css";
function BoxRecruit({about}) {
  return (
    <div className="box-recruit">
      <img src={require("../../Images/recrui-img.PNG")}></img>
      <p>
       {about}
      </p>
    </div>
  );
}

export default BoxRecruit;
