import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router-dom";
import ProductApi from "../../../Apis/ProductApi";
import Title from "../../../Components/titleComponent/title";
import "./detailProductPage.css";
import { Markup, Matcher } from "interweave";
import { BiTimeFive } from "react-icons/bi";
import ItemProduct from "../../../Components/itemProduct/itemProduct";

function DetailProductPage() {
  useEffect(() => {
    document.title = "Product";
  }, []);
  const [listProduct, setListProduct] = useState([]);
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function FetchProduct() {
      try {
        const response = await ProductApi.getById(id);
        const data = JSON.parse(JSON.stringify(response));

        if (!data.error) {
          setProduct(data.data);
          FetchListProductByIDCate(data.data.idCategory);
        }
      } catch (error) {
        console.log(error);
      }
    }
    const FetchListProductByIDCate = async (idCate) => {
      try {
        const response = await ProductApi.getByIdCate(idCate, {
          limit: 4,
          page: 0,
        });
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          setListProduct(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    FetchProduct();
  }, [id]);
  return (
    <div style={{paddingTop:"130px"}}>
      
      <div className="container">
       
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <Carousel autoPlay interval="2000" transitionTime="1000">
              {product?.image?.map((i, index) => (
                <div key={index}>
                  <img alt="" src={i?.url} />
                </div>
              ))}
            </Carousel>
           
          </div>
          <div className="col-md-4 col-xs-12">
            <h3>
           
              {product?.name}
            </h3>
            <h2 style={{marginBottom:"20px",color:"red"}}>{product?.price}</h2>
            <div className="content-product-detail">
             
            
              <p>
                <strong>Kích thước</strong> : <i>{product?.size}</i>
              </p>
              <p>
                <strong>Sử dụng </strong> : <br/><i><Markup content={product?.uses}/></i>
              </p>
              <div style={{height:"2px",width:"100%",backgroundColor:"rgb(153, 153, 153)",marginBottom:"10px"}}/>
              <p>
                <strong>Danh mục</strong> :<i> {product?.nameCategory}</i>
              </p>
              <a href="/lien-he" className="btn btn-success">
                <i>Liên hệ để đặt mẫu</i>
              </a>
            </div>
          </div>
        </div>
        <div className="line-product"></div>
        <div className="description-product">
              <Markup content={product?.description}></Markup>
            </div>
        <div className="line-product"></div>
        <div className="related-product">
          <h3>
            <i>Sản phẩm tương tự</i>
          </h3>
          <div className="row">
            {listProduct?.map((product, index) => (
              <div key={index} className="col-md-3 col-xs-12">
                <ItemProduct product={product}></ItemProduct>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProductPage;
