import { React, useState, useEffect } from "react";
import "./footer.css";
import { withTranslate } from 'react-redux-multilingual'
import InformationApi from "../../Apis/InformationApi";
import { useParams } from "react-router-dom";
import Aos from "aos";
import Iframe from "../iframeComponent/iframe";

function Footer(props) {
  const params = useParams();

  useEffect(() => {

    Aos.init({ duration: 2000 });
  }, [params]);

  const { translate } = props;
  const [information, setInformation] = useState({});
  const iframe =
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.293472950041!2d109.14527379235157!3d13.7611675903414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5a10b47929a9f%3A0x3690edbf96c79d01!2sGALAXY%20SYNTHETIC%20CO.%2CLTD!5e0!3m2!1svi!2s!4v1662612339997!5m2!1svi!2s" width="100%" height="250px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
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
  return (
    <div>
      <div className="background-footer">
        <div className="content-top-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-5"  data-aos="fade-right"
                data-aos-duration="1500">
                <div className="box-name-footer">
                  <div className="line-v-footer" />
                  <div className="name-company-footer">
                    <h3>{translate('nameCompany')}</h3>
                    <h4>Outdoor & Indoor Furniture</h4>
                  </div>
                </div>
                <div className="info-company-footer">
                  <h6>
                    {translate('address')} : {translate("comAddress")}
                  </h6>
                  <h6>Hotline : {information?.phone}</h6>
                  <h6>Email : {information?.email}</h6>
                </div>
              </div>
              <div className="col-md-3"  data-aos="fade-left"
                data-aos-duration="1500">
                <div className="about-footer">
                  <div className="second-about-footer">
                    <div className="bar-about-footer">
                      <div className="circle-about-footer" />
                      <p>{translate('des1')}</p>
                    </div>
                    <div className="bar-about-footer">
                      <div className="circle-about-footer" />
                      <p>
                      {translate('des2')}
                      </p>
                    </div>
                    <div className="bar-about-footer">
                      <div className="circle-about-footer" />
                      <p>{translate('des3')}</p>
                    </div>
                    <div className="bar-about-footer">
                      <div className="circle-about-footer" />
                      <p>{translate('des4')}</p>
                    </div>
                    <div>
                  <div className="box-social-footer">
                    <a href="/" className="box-cicle-facebook" />
                    <a href="/" className="box-cicle-zalo" />
                    <a href="/" className="box-cicle-google" />
                  </div>
                </div>
                  </div>
                 
                </div>
              </div>
              <div className="col-md-4"  data-aos="fade-left"
                data-aos-duration="1500">
                <div className="goo-map">
                  <h3>Find us on Google Maps</h3>
                  <div className="line-map"/>
                  <Iframe iframe={iframe} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-bot-footer">
          <div className="container">
           
                <div className="bar-bot-footer">
                  <div className="infor-design-footer">
                    <p>Copyright 2022 © Galaxy Synthetic CO., LTD</p>
                  </div>
             
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default  withTranslate(Footer) ;
