import React, { useState } from "react";
import "./productPage.css";
import Title from "../../../Components/titleComponent/title";
import BarCategory from "../../../Components/barCategory/barCategory";
import ItemProduct from "../../../Components/itemProduct/itemProduct";
import CategoryProductApi from "../../../Apis/CategoryProductApi";
import ProductApi from "../../../Apis/ProductApi";
import { useEffect } from "react";
import { Markup } from "interweave";
import { withTranslate } from 'react-redux-multilingual'
import InformationApi from "../../../Apis/InformationApi";
import Aos from "aos";
import { useParams } from "react-router-dom";
function ProductPage(props) {
  const params = useParams();

  useEffect(() => {

    Aos.init({ duration: 2000 });
  }, [params]);
  const { translate } = props;
  const [listCategory, setListCategory] = useState([]);
  const [listProduct, setListProduct] = useState([]);
  const [category, setCategory] = useState({});
  const [information, setInformation] = useState({});
  useEffect(() => {
    document.title = "Products";
    const FetchListCategory = async () => {
      try {
        const response = await CategoryProductApi.getAll();
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          setListCategory(data.data);
          setCategory(data.data[0]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    FetchListCategory();
  }, []);
  useEffect(() => {
    const fetchInformation = async () => {
      try {
        const response = await InformationApi.getById(
          "631ad84a127721f9a7b6ed71"
        );
        const data = JSON.parse(JSON.stringify(response));

        if (!data.error) {
          setInformation(data.inforCompany);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchInformation();
  }, []);
  useEffect(() => {
    async function handleGetProductByIdCategory(category) {
      setCategory(category);
      try {
        const response = await ProductApi.getByIdCate(category._id);
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          setListProduct(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    handleGetProductByIdCategory(category);
  }, [category]);

  return (
    <div>
      <div className="hero-image-product "></div>
      <Title title={translate('product')} />
      <div className="container">
        <div className="row">
          <div className="col-md-3"  data-aos="fade-right"
                data-aos-duration="1500">
            <div className="box-category-product">
              {listCategory?.map((category, index) => (
                <div key={index} onClick={() => setCategory(category)}>
                  <BarCategory category={category} />
                </div>
              ))}
            </div>
            <div className="contact-product-page mb-5">
              <i>For more information please contact :</i>
              <h4>GALAXY SYNTHETIC COMPANY</h4>
              <p>Address : Lot C14, Phu Tai Industrial Zone, Bui Thi Xuan Ward Quy Nhon City, Binh Dinh </p>
              <p>Hotline : {information?.phone}</p>
              <p>Email : {information?.email}</p>
            </div>
          </div>
          <div className="col-md-9"  data-aos="fade-left"
                data-aos-duration="1500">
            <div className="group-product">
              {/* <Markup content={category?.description} /> */}
              <div className="row">
                {listProduct?.map((product, index) => (
                  <div className="col-md-4 col-sm-6">
                    <ItemProduct product={product} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withTranslate(ProductPage) ;
