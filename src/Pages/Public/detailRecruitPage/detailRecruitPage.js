import { Markup } from "interweave";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BiTimeFive } from "react-icons/bi";
import { useParams } from "react-router-dom";
import RecruitApi from "../../../Apis/RecruitApi";
import BoxRecruit from "../../../Components/boxRecruit/boxRecruit";
import "./detailRecruitPage.css";
import { withTranslate } from 'react-redux-multilingual'
function DetailRecruitPage(props) {
  const { translate } = props;
  const { id } = useParams();
  const [recruit, setRecruit] = useState({});
  useEffect(() => {
    const FetchRecruit = async () => {
      document.title = "Recruitment";
      try {
        const response = await RecruitApi.getById(id);
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          setRecruit(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    FetchRecruit();
  }, [id]);
  return (
    <div style={{ backgroundColor: "#e8e8e8" }}>
      <div className="hero-image-recruit"></div>
      <div className="container">
        <div className="title-recruit">
        <h3>
            {translate('recruit')} <span> {translate('new')}</span>
          </h3>
          <div />
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="content-detail-recruit">
              <h3>{recruit?.name}</h3>
              <div className="time-detail" style={{ marginBottom: "20px" }}>
                <BiTimeFive style={{ fontSize: "20px" }} />
                <p>{recruit?.createdAt?.slice(0, 10)}</p>
              </div>
              <strong>Phúc lợi : </strong>
              <Markup content={recruit?.welfare}></Markup>
              <strong>Mô tả công việc : </strong>
              <Markup content={recruit?.description}></Markup>
              <strong>Yêu cầu : </strong>
              <Markup content={recruit?.requirements}></Markup>
            </div>
          </div>
          <div className="col-md-4">
            <BoxRecruit about={translate('aboutRecruit')}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withTranslate(DetailRecruitPage);
