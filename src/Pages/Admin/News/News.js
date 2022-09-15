import { deleteObject, ref } from "firebase/storage";
import { React, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { storage } from "../../../Apis/FirebaseConfig";
import NewsApi from "../../../Apis/NewsApi";

function News() {
  const [listNews, setListNews] = useState([]);
  useEffect(() => {
    const FetchListNews = async () => {
      try {
        const response = await NewsApi.getAll();
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          setListNews(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    FetchListNews();
  }, [listNews]);
  const deleteFromFirebase = (news) => {
    const desertRef = ref(storage, `images/news/avatar/${news.nameImage}`);
    deleteObject(desertRef)
      .then(() => {
        deleteNewsDatabase(news._id);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  async function deleteNewsDatabase(id) {
    try {
      const response = await NewsApi.remove(id);
      const data = JSON.parse(JSON.stringify(response));
      if (!data.error) {
        alert("Xóa thành công");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  }
  function handleDeleteNews(news) {
    deleteFromFirebase(news);
  }
  return (
    <div className="container-table">
      <h2 className="title-page-admin">Danh sách các tin tức</h2>
      <div className="box-add-item">
        <a href="/admin/tin-tuc/tao-moi" className="btn btn-primary">
          Thêm tin tức
        </a>
      </div>
      <div>
        <div className="auto-scroll-table">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th style={{ width: "130px" }}>STT</th>
                <th>Tên bài viết</th>

                <th>Ảnh bìa</th>
                <th>Số người xem</th>
                <th>Nội dung</th>

                <th style={{ width: "150px" }}>Hành động</th>
              </tr>
            </thead>
            {listNews?.map((n, index) => (
              <tbody>
                <tr>
                  <td>{index}</td>

                  <td>{n?.name}</td>

                  <td>
                    <img
                      className="img-news-admin"
                      alt=""
                      src={n?.urlImage}
                    ></img>
                  </td>
                  <td>{n?.view}</td>
                  <td style={{ maxWidth: "45vw" }}>
                    <div
                      className="auto-scroll"
                      dangerouslySetInnerHTML={{ __html: n?.content }}
                    />
                  </td>
                  <td>
                    <a
                      href={`/admin/tin-tuc/cap-nhat/${n?._id}`}
                      className="btn-action btn btn-primary"
                    >
                      <i className="icon-action fa fa-edit"></i>
                    </a>
                    <button
                      onClick={() => handleDeleteNews(n)}
                      className="btn-action btn btn-danger"
                    >
                      <i className="icon-action fa fa-remove"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
}

export default News;
