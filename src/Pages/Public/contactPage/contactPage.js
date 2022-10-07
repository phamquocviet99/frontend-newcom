import React, { useState } from "react";
import Title from "../../../Components/titleComponent/title";
import "./contactPage.css";
import { AiOutlineHome, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import Iframe from "../../../Components/iframeComponent/iframe";
import MessageApi from "../../../Apis/MessageApi";
import Aos from "aos";
import "aos/dist/aos.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { withTranslate } from 'react-redux-multilingual'
function ContactPage(props) {
  const { translate } = props;
  const params = useParams();
  useEffect(() => {
    document.title = "Contact"
    Aos.init({ duration: 2000 });
  }, [params]);
  const [message, setMessage] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });
  async function handleSendMessage() {
    if (
      message.email === "" ||
      message.name === "" ||
      message.title === "" ||
      message.message === ""
    ) {
      alert("Mời bạn nhập đủ thông tin");
    } else {
      try {
        const response = await MessageApi.create(message);
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          alert("Gửi thành công, cảm ơn bạn");
        }
      } catch (error) {
        alert("Gửi thất bại, mời bạn thử lại");
        console.log(error);
      }
    }
  }

  const iframe =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.293472950041!2d109.14527379235157!3d13.7611675903414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5a10b47929a9f%3A0x3690edbf96c79d01!2sGALAXY%20SYNTHETIC%20CO.%2CLTD!5e0!3m2!1svi!2s!4v1662612339997!5m2!1svi!2s" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  return (
    <div>
      <div className="hero-image-contact"></div>
      <Title title={translate('contact')} />
      <div className="container">
        <div className="row mb-5">
          <div data-aos="fade-right"
        data-aos-duration="2500"  className="col-md-6">
            <div className="name-company-homepage">
              <h2>GALAXY SYNTHETIC COMPANY</h2>
              <h3>Outdoor & Indoor Furniture</h3>
            </div>
            <div className="group-bar-contact">
              <div className="bar-contact">
                <AiOutlineHome className="icon-contact-1" />
                <p>
                  <strong>{translate('address')} : </strong>
                  <span>
                    {translate("comAddress")}
                  </span>
                </p>
              </div>

              <div className="bar-contact">
                <AiOutlinePhone className="icon-contact" />
                <p>
                  <strong>Hotline : </strong>
                  <span>0909676848</span>
                </p>
              </div>
              <div className="bar-contact">
                <AiOutlineMail className="icon-contact" />
                <p>
                  <strong>Email : </strong>
                  <span>galaxysynthetic@gmail.com</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-4 "data-aos="fade-left"
        data-aos-duration="2500" >
            <div className="group-input-1 ">
              <div className="input-group">
                <label className="font-label">{translate('yname')} :</label>
                <br />
                <input
                  onChange={(e) =>
                    setMessage({ ...message, name: e.target.value })
                  }
                  className="form-control"
                  
                ></input>
              </div>
              <div className="input-group ml-5">
                <label className="font-label">Email :</label>
                <br />
                <input
                  onChange={(e) =>
                    setMessage({ ...message, email: e.target.value })
                  }
                  className="form-control"
                 
                ></input>
              </div>
            </div>
            <div className="input-group mt-2">
              <label className="font-label">{translate('ytitle')} :</label>
              <br />
              <input
                onChange={(e) =>
                  setMessage({ ...message, title: e.target.value })
                }
                className="form-control"
                
              ></input>
            </div>
            <div className="input-group mt-2">
              <label className="font-label">{translate('content')} :</label>
              <br />
              <textarea
                onChange={(e) =>
                  setMessage({ ...message, message: e.target.value })
                }
                style={{ height: "150px" }}
                className="form-control"
              ></textarea>
              <button
                onClick={handleSendMessage}
                type="button"
                className="btn btn-primary mt-4"
              >
                {translate('send')}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-5">
        <Iframe iframe={iframe} />
      </div>
    </div>
  );
}

export default withTranslate(ContactPage);
