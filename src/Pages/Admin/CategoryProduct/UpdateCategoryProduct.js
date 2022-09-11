import { React, useState, useEffect } from "react";
import JoditEditor from "jodit-react";
import CategoryProductApi from "../../../Apis/CategoryProductApi";
import { useNavigate, useParams } from "react-router-dom";

function UpdateCategoryProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    async function Fetchingcategory() {
      try {
        const response = await CategoryProductApi.getById(id);
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          setCategory(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    Fetchingcategory();
  }, [id]);

  async function UpdateCategory() {
    try {
      const response = await CategoryProductApi.update(id, category);
      const data = JSON.parse(JSON.stringify(response));
      if (!data.error) {
        alert("Thêm danh mục thành công");
        return true;
      }
    } catch (error) {
      alert("Thêm danh mục  thất bại");
      console.log(error);
      return false;
    }
  }
  //  handle Submit
  function submitCategory() {
    if (category.name === "" || category.description === "") {
      alert("Mời bạn nhập đủ trường thông tin !");
    } else {
      if (UpdateCategory()) {
        navigate(-1);
      }
    }
  }

  return (
    <div>
      <h2 className="title-page-admin">Thêm danh mục mới</h2>
      <div className="container">
        <div className="input-group">
          <label className="font-label">Tên danh mục mới :</label>
          <br />
          <input
            value={category.name}
            onChange={(e) => {
              setCategory({ ...category, name: e.target.value });
            }}
            className="form-control"
            placeholder="Mời bạn nhập tên danh mục ..."
          ></input>
        </div>
        <div className="input-group mt-5">
          <label className="font-label">Tên danh mục mới :</label>
          <br />
          <JoditEditor
            value={category.description}
            tabIndex={1}
            onChange={(e) => {
              setCategory({ ...category, description: e });
            }}
            onBlur={(e) => {
              setCategory({ ...category, description: e });
            }}
          />
        </div>
        <div className="group-btn-action">
          <button
            onClick={submitCategory}
            type="submit"
            className="btn btn btn-primary"
          >
            Submit
          </button>
          <button
            onClick={() => navigate(-1)}
            type="submit"
            className="btn btn btn-danger"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateCategoryProduct;
