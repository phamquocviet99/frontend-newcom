import { React, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Markup } from "interweave";
import CategoryProductApi from "../../../Apis/CategoryProductApi";
import "./CategoryProduct.css";

function CategoryProject() {
  const [listCategory, setListCategory] = useState([]);

  useEffect(() => {
    const FetchListCategory = async () => {
      try {
        const response = await CategoryProductApi.getAll();
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          setListCategory(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    FetchListCategory();
  }, [listCategory]);

  // func Delete Category
  const deleteCategory = async (id) => {
    try {
      const response = await CategoryProductApi.remove(id);
      const data = JSON.parse(JSON.stringify(response));
      if (!data.error) {
        alert("Xóa thành công");
      }
    } catch (error) {
      alert("Xóa thất bại");
      console.log(error);
    }
  };

  return (
    <div className="container-table">
      <h2 className="title-page-admin">Danh mục các dự án</h2>
      <div className="box-add-item">
        <a href="/admin/danh-muc-san-pham/tao-moi" className="btn btn-primary">
          Thêm danh mục mới
        </a>
      </div>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th style={{ width: "100px" }}>STT</th>
              <th>Tên danh mục</th>
              <th>Mô tả</th>
              <th style={{ width: "150px" }}>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {listCategory?.map((c, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{c?.name}</td>
                <td>
                  <Markup content={c?.description} />
                </td>
                <td>
                  <a
                    href={`/admin/danh-muc-san-pham/thay-doi/${c?._id}`}
                    className="btn-action btn btn-primary"
                  >
                    <i className="icon-action fa fa-edit"></i>
                  </a>
                  <button className="btn-action btn btn-danger">
                    <i className="icon-action fa fa-remove"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default CategoryProject;
