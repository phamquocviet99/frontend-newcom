import React from "react";
import "./detailStylePage.css";
import { BiTimeFive } from "react-icons/bi";
import BoxStyleRight from "../../../Components/boxStyleRight/boxStyleRight";
import NewsApi from "../../../Apis/NewsApi";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Markup } from "interweave";

function DetailStylePage() {
  const { id } = useParams();
  const [news, setNews] = useState({});
  const [listNews, setListNews] = useState([]);

  useEffect(() => {
    document.title = "Collection";
    async function FetchNews() {
      try {
        const response = await NewsApi.getById(id);
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          setNews(data.data);
        }
      } catch (error) {
        alert("Tải tin tức thất bại");
        console.log(error);
      }
    }
    FetchNews();
  }, [id]);
  useEffect(() => {
    const FetchListNews = async () => {
      try {
        const response = await NewsApi.getAll({ page: 0, limit: 5 });
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          var listData = [];
          for (const neww of data.data) {
            if (neww._id !== id) {
              listData.push(neww);
            }
          }
          setListNews(listData);
        }
      } catch (error) {
        console.log(error);
      }
    };
    FetchListNews();
  }, []);
  return (
    <div>
      <div className="hero-image-style" />
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-9">
            <div className="title-detail-style">
              <h3>{news?.name}</h3>
              <div className="time-detail mb-3">
                <BiTimeFive style={{ fontSize: "20px" }} />
                <p>{news?.createdAt?.slice(0, 10)}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9  mb-5">
            <img className="avatar-news" alt="" src={news?.urlImage}></img>
            <Markup content={news?.content}></Markup>
          </div>
          <div className="col-md-3">
            <div className="right-detail-style">
              <div className="name-detail-style">
                <p>Tin tức liên quan</p>
              </div>
              {listNews?.map((news, index) => (
                <BoxStyleRight news={news} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailStylePage;
