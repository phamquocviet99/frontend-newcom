import React from "react";
import "./productPage.css";
import Title from "../../../Components/titleComponent/title";
import BarCategory from "../../../Components/barCategory/barCategory";
import ItemProduct from "../../../Components/itemProduct/itemProduct";
function ProductPage() {
  return (
    <div>
      <div className="hero-image-product "></div>
      <Title title="các Mẫu sản phẩm" />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="box-category-product">
              <BarCategory />
              <BarCategory />
              <BarCategory />
              <BarCategory />
              <BarCategory />
            </div>
          </div>
          <div className="col-md-9">
            <div className="group-product">
              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <ItemProduct/>
                </div>
                <div className="col-md-4 col-sm-6">
                  <ItemProduct/>
                </div>
                <div className="col-md-4 col-sm-6">
                  <ItemProduct/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
