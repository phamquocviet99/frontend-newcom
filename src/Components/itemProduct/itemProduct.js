import React from "react";
import "./itemProduct.css";

function ItemProduct({ product }) {
  return (
    <a href={`/san-pham/${product?._id}`}>
      <div className="item-product text-center mb-5">
        <img alt="" src={product?.avatar?.url} />
        <h3>{product?.name}</h3>
        <hr />
        <div className="bar-price">Giá : Liên hệ</div>
      </div>
    </a>
  );
}

export default ItemProduct;
