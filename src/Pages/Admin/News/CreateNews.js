import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NewsApi from "../../../Apis/NewsApi";
import JoditEditor from "jodit-react";
import useFirebase from "../../../Apis/firebaseCD";

function CreateNews() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [selectAvatar, setSelectAvatar] = useState(null);
  const [news, setNews] = useState({
    name: "",
    urlImage: "",
    content: "",
    nameImage: "",
  });

  useEffect(() => {
    async function createNews() {
      try {
        const response = await NewsApi.create(news);
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          alert("Thêm tin tức thành công");
          navigate(-1);
        }
      } catch (error) {
        alert("Thêm tin tức thất bại");
        console.log(error);
      }
    }
    if (news.urlImage !== "") {
      createNews();
    }
  }, [news.urlImage]);

  function submitProject() {
    if (news.name === "" || news.content === "" || selectAvatar === null) {
      alert("Mời bạn nhập đủ trường thông tin !");
    } else {
      PreUploadNews();
    }
  }
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
  async function PreUploadNews() {
    const avatar = await useFirebase.uploadSingleImage(
      selectAvatar,
      "news/avatar"
    );
    if (avatar) {
      setNews({ ...news, urlImage: avatar.url, nameImage: avatar.name });
    } else {
      alert("Tải hình ảnh đại diện thất bại !");
    }
  }
  return (
    <div className="container">
      <div className="info-page-admin">
        <h2 className="title-page-admin">Thêm tin tức mới</h2>

        <div className="form-group ">
          <label>Tên bài viết</label>
          <input
            onChange={(e) => {
              setNews({ ...news, name: e.target.value });
            }}
            type="email"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Ảnh đại diện tin tức</label>

          <div className="input-group">
            <input onChange={handleChangeAvatar} type="file" className="" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-12 img-check">
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
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className=" form-group">
              <label>Nội dung </label>
              <br />
              <label>
                Vui lòng sử dụng font chữ Georgia để phù hợp với font chữ của
                website
              </label>
              <label>
                Nếu có đăng hình ảnh, copy link hình ảnh, vào phần edit (cây bút
                khi nhấn vào ảnh) chọn <b>Advanced</b>, phần <b>Styles</b> dán
                thuộc tính <br /> (max-height: 100%; max-width: 100%; object-fit
                : cover) để hình ảnh đẹp hơn
              </label>

              <JoditEditor
                onBlur={(newContent) => {
                  setNews({ ...news, content: newContent });
                }}
                onChange={(newContent) => {
                  setNews({ ...news, content: newContent });
                }}
                className="form-control"
                tabIndex={1}
              />
            </div>
            <div className="group-btn">
              <button
                disabled={loading}
                onClick={submitProject}
                type="submit"
                className="btn-admin btn btn-primary"
              >
                Thêm bài viết
              </button>
              <button type="submit" className="btn-admin btn btn-danger">
                Hủy bỏ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateNews;
