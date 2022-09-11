import { React, useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import RecruitApi from "../../../Apis/RecruitApi";

function RecruitPageAdmin() {
  const [listRecruit, setListRecruit] = useState([]);
  useEffect(() => {
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
  // fun Delete
  async function deleteRecruit(id) {
    try {
      const response = await RecruitApi.remove(id);
      const data = JSON.parse(JSON.stringify(response));
      if (!data.error) {
        FetchListRecruit();
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="container-table">
      <h2 className="title-page-admin">Danh sách các mục tuyển dụng</h2>
      <div className="box-add-item">
        <a href="/admin/tuyen-dung/tao-moi" className="btn btn-primary">
          Thêm tin tuyển dụng
        </a>
      </div>
      <div>
        <div className="auto-scroll-table">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th style={{ width: "130px" }}>STT</th>
                <th>Tuyển dụng</th>
                <th>Phúc lợi</th>
                <th>Yêu cầu</th>
                <th>Mô tả</th>
                <th style={{ width: "150px" }}>Hành động</th>
              </tr>
            </thead>

            {listRecruit?.map((r, index) => (
              <tbody key={index}>
                <tr>
                  <td>{index}</td>
                  <td>{r?.name}</td>
                  <td>
                    <div
                      className="auto-scroll"
                      dangerouslySetInnerHTML={{ __html: r?.welfare }}
                    />
                  </td>
                  <td>
                    <div
                      className="auto-scroll"
                      dangerouslySetInnerHTML={{ __html: r?.requirements }}
                    />
                  </td>
                  <td>
                    <div
                      className="auto-scroll"
                      dangerouslySetInnerHTML={{ __html: r?.description }}
                    />
                  </td>
                  <td>
                    <a
                      href={`/admin/tuyen-dung/cap-nhat/${r._id}`}
                      className="btn-action btn btn-primary"
                    >
                      <i className="icon-action fa fa-edit"></i>
                    </a>
                    <button
                      onClick={() => deleteRecruit(r._id)}
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

export default RecruitPageAdmin;
