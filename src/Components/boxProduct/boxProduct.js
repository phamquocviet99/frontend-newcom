import { React, useState, useTransition } from "react";

import "./boxProduct.css";

function BoxProduct({ product }) {
  return (
    <a href="/san-pham">
      <div className="box-product">
        <img alt="" src={product?.urlImage}></img>
        <p>{product?.name}</p>
      </div>
    </a>
  );
}

export default BoxProduct;
