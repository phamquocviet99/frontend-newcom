import { React, useState } from "react";
import JoditEditor from "jodit-react";
import CategoryProductApi from "../../../Apis/CategoryProductApi";
import { useNavigate } from "react-router-dom";
import useFirebase from "../../../Apis/firebaseCD";
import { useEffect } from "react";

function CreateCategoryProduct() {
  const navigate = useNavigate();
  const [selectAvatar, setSelectAvatar] = useState(null);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState({
    name: "",
    avatar: { url: "", name: "" },
  });
  useEffect(() => {
    async function CreateCategory() {
      try {
        const response = await CategoryProductApi.create(category);
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          alert("Thêm danh mục thành công");
          navigate(-1)
        }
      } catch (error) {
        alert("Thêm danh mục  thất bại");
        console.log(error);
       
      }
    }
    if (category.avatar.url !== "") {
      CreateCategory()
    }
  }, [category.avatar])

  //  handle Submit
  async function submitCategory() {
    if (category.name === "" || selectAvatar === null) {
      alert("Mời bạn nhập đủ trường thông tin !");
    } else {
      const avatar = await useFirebase.uploadSingleImage(
        selectAvatar,
        "categories/avatar"
      );
      if (avatar) {
        setCategory({ ...category, avatar: avatar })
      }

    }
  }
  //   Handle Change Avatar
  function handleChangeAvatar(e) {
    const file = e.target.files[0];
    if (file.type === "image/png" || file.type === "image/jpeg") {
      setSelectAvatar(file);
    } else {
      alert("Mời bạn chọn lại hình ảnh đúng định dạng !");
      e.target.value = null;
    }
    e.target.value = null;
  }

  return (
    <div>
      <h2 className="title-page-admin">Thêm danh mục mới</h2>
      <div className="container">
        <div className="input-group">
          <label className="font-label">Tên danh mục mới :</label>
          <br />
          <input
            onChange={(e) => {
              setCategory({ ...category, name: e.target.value });
            }}
            className="form-control"
            placeholder="Mời bạn nhập tên danh mục ..."
          ></input>
        </div>
        <div className="form-group">
          <label>Hình ảnh đại diện (chỉ chọn 1 ảnh)</label>

          <div className="input-group">
            <input onChange={handleChangeAvatar} type="file" />
          </div>
        </div>
        <div className="form-group">
          <div className="img-check">
            {selectAvatar ? (
              <div>
                <img
                  className="img-update"
                  alt=""
                  src={URL.createObjectURL(selectAvatar)}
                />
                <div className="delete-img">
                  <button
                    onClick={() => setSelectAvatar()}
                    className="btn btn-danger"
                  >
                    <i
                      style={{ fontSize: "15px", color: "white" }}
                      className="fa fa-remove"
                    ></i>
                  </button>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
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
            onClick={() => (navigate(-1))}
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

export default CreateCategoryProduct;
