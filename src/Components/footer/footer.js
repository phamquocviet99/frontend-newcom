import { React, useState, useEffect } from "react";
import "./footer.css";
import { withTranslate } from 'react-redux-multilingual'
import InformationApi from "../../Apis/InformationApi";
import { useParams } from "react-router-dom";
import Aos from "aos";

function Footer(props) {
  const params = useParams();

  useEffect(() => {

    Aos.init({ duration: 2000 });
  }, [params]);

  const { translate } = props;
  const [information, setInformation] = useState({});
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
              <div className="col-md-6"  data-aos="fade-right"
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
              <div className="col-md-6"  data-aos="fade-left"
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
                  </div>
                  <div className="line-footer"></div>
                  <div className="first-about-footer">
                    <div className="bar-about-footer">
                      <div className="circle-about-footer" />
                      <p>{translate('des5')}</p>
                    </div>
                    <div className="bar-about-footer">
                      <div className="circle-about-footer" />
                      <p>{translate('des6')}</p>
                    </div>
                    <div className="bar-about-footer">
                      <div className="circle-about-footer" />
                      <p>{translate('des7')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-bot-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="bar-bot-footer">
                  <div className="infor-design-footer">
                    <p>Copyright 2022 © Galaxy Synthetic CO., LTD</p>
                    <p>
                      Designed by <a href="/">HBB Tech</a>.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
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
        </div>
      </div>
    </div>
  );
}

export default  withTranslate(Footer) ;
