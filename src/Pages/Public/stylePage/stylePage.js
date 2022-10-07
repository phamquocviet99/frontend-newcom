import React from "react";
import "./stylePage.css";
import Title from "../../../Components/titleComponent/title";
import BoxStyle from "../../../Components/boxStyle/boxStyle";
import { useState } from "react";
import { useEffect } from "react";
import NewsApi from "../../../Apis/NewsApi";
import { translate } from "react-redux-multilingual/lib/utils";
import { withTranslate } from 'react-redux-multilingual'
function StylePage(props) {
  const { translate } = props;
  const [listNews, setListNews] = useState([]);
  const [pagination, setPagination] = useState({
    page: 0,
    limit: 6,
    countRows: 1,
  });
  const [filters, setFilters] = useState({
    limit: 6,
    page: 0,
  });
  const [loading, setLoading] = useState(false);
  const totalPages = Math.ceil(pagination.countRows / pagination.limit);
  useEffect(() => {
    document.title = "Collection";
    const FetchListNews = async () => {
      try {
        setLoading(true);
        const response = await NewsApi.getAll(filters);
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          setListNews(data.data);
          setPagination(data.pageInfo);
          setLoading(false);
          console.log(data.data)
        }
      } catch (error) {
        console.log(error);
      }
    };
    FetchListNews();
  }, [filters]);
  function handlePageChange(newPage) {
    setPagination({ ...pagination, page: newPage });
    setFilters({ ...filters, page: newPage });
  }
  return (
    <div>
      <div className="hero-image-style"></div>
      <Title title={translate('news')} />
      <div className="container">
       
          {loading ? (
            <div
              className="text-center"
              style={{
                height: "780px",
                width: "100%",
                fontSize: "30px",
                display: "flex",
                alignItems: "center",
                color: "#6f6f6f",
              }}
            >
              Đang tải tin tức...
            </div>
          ) : (
            <div className="row">
              {listNews?.map((n, index) => (
                <div key={index} className="col-md-4 col-sm-6 col-xs-12">
                  <BoxStyle news={n} />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="group-btn-action">
          {pagination.page <= 0 ? (
            <></>
          ) : (
            <button
              style={{ marginRight: "10px" }}
              className=" btn btn btn-danger"
              disabled={pagination.page <= 0}
              onClick={() => handlePageChange(pagination.page - 1)}
            >
              Quay lại
            </button>
          )}
          {pagination.page >= totalPages - 1 ? (
            <></>
          ) : (
            <button
              className="btn btn btn-primary"
              disabled={pagination.page >= totalPages - 1}
              onClick={() => handlePageChange(pagination.page + 1)}
            >
              Xem thêm
            </button>
          )}
        </div>
      </div>
  
  );
}

export default withTranslate(StylePage);
