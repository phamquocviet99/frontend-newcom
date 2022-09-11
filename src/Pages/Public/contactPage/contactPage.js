import React from "react";
import Title from "../../../Components/titleComponent/title";
import "./contactPage.css";
import { AiOutlineHome, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { Button, Form } from "react-bootstrap";
import Iframe from "../../../Components/iframeComponent/iframe";

function ContactPage() {
  const iframe =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.293472950041!2d109.14527379235157!3d13.7611675903414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5a10b47929a9f%3A0x3690edbf96c79d01!2sGALAXY%20SYNTHETIC%20CO.%2CLTD!5e0!3m2!1svi!2s!4v1662612339997!5m2!1svi!2s" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
  return (
    <div>
      <div className="hero-image-contact"></div>
      <Title title="liên hệ" />
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6">
            <div className="name-company-homepage">
              <h2>GALAXY SYNTHETIC COMPANY</h2>
              <h3>Outdoor & Indoor Furniture</h3>
            </div>
            <div className="group-bar-contact">
              <div className="bar-contact">
                <AiOutlineHome className="icon-contact" />
                <p>
                  <strong>Địa chỉ : </strong>
                  <span>
                    Số 248A Phan Bội Châu, P Trần Hưng Đạo, <br />
                    TP Qui Nhơn, Tỉnh Bình Định
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
          <div className="col-md-6 mt-4 ">
            <div className="group-input-1">
              <div className="input-group">
                <label className="font-label">Họ tên :</label>
                <br />
                <input
                  className="form-control"
                  placeholder="Mời bạn nhập họ tên..."
                ></input>
              </div>
              <div className="input-group ml-5">
                <label className="font-label">Email :</label>
                <br />
                <input
                  className="form-control"
                  placeholder="Mời bạn nhập địa chỉ email"
                ></input>
              </div>
            </div>
            <div className="input-group mt-2">
              <label className="font-label">Tiêu đều :</label>
              <br />
              <input
                className="form-control"
                placeholder="Mời bạn nhập tiêu đề"
              ></input>
            </div>
            <div className="input-group mt-2">
              <label className="font-label">Nội dung :</label>
              <br />
              <textarea
                style={{ height: "150px" }}
                className="form-control"
                placeholder="Mời bạn nhập nội dung"
              ></textarea>
              <button type="button" className="btn btn-success mt-4">
                Gửi đi
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

export default ContactPage;
