import { React, useState, useTransition } from "react";

import "./boxProduct.css";

function BoxProduct() {
  const [isVisible1, setIsVisible1] = useState(true);

  const handleMouseOver1 = () => {
    setIsVisible1((v) => !v);
  };

  return (
    <div
      className="div-design1"
      onMouseEnter={handleMouseOver1}
      onMouseLeave={handleMouseOver1}
      //   style={{
      //     backgroundImage: `url(${project?.image[0]?.url})`,
      //     backgroundSize: "cover",
      //     backgroundPosition: "center",
      //     width: "100%",
      //   }}
    >
      <a href="/">
        <div className={isVisible1 ? "content-project-2" : "content-project-1"}>
          <div className={isVisible1 ? "display-none" : "info-project"}>
            <p>Đồ chơi</p>
            <p>
              Địa điểm :<span> Đồ chơi</span>
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default BoxProduct;
