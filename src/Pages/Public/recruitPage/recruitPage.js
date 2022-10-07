import React from "react";
import { useState, useEffect } from "react";
import BarRecruit from "../../../Components/barRecruit/barRecruit";
import BoxRecruit from "../../../Components/boxRecruit/boxRecruit";
import "./recruitPage.css";
import { withTranslate } from 'react-redux-multilingual'
import RecruitApi from "../../../Apis/RecruitApi";

function RecruitPage(props) {
  const { translate } = props;
  const [listRecruit, setListRecruit] = useState([]);

  useEffect(() => {
    document.title = "Recruitment";
    const FetchListRecruit = async () => {
      try {
        const response = await RecruitApi.getAll();
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          setListRecruit(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    FetchListRecruit();
  }, [listRecruit]);
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
            <div className="list-recruit">
              {listRecruit?.map((r, index) => (
                <BarRecruit recruit={r}/>
              ))}
            </div>
          </div>
          <div className="col-md-4">
            <BoxRecruit about={translate('aboutRecruit')} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default withTranslate(RecruitPage);
