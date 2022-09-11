import React from "react";
import "./itemProduct.css";

function ItemProduct() {
  return (
    <div className="item-product text-center">
      <img alt="" src={require("../../Images/img20170320085553667.webp")} />
      <h3>Bộ bàn ghế</h3>
      <hr />
      <div className="bar-price">Giá : Liên hệ</div>
    </div>
  );
}

export default ItemProduct;
