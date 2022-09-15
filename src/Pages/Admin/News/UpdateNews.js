import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NewsApi from "../../../Apis/NewsApi";
import JoditEditor from "jodit-react";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";
import { storage } from "../../../Apis/FirebaseConfig";
import { useEffect } from "react";

function UpdateNews() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState({
    name: "",
    urlImage: "",
    content: "",
    nameImage: "",
  });
  useEffect(() => {
    async function FetchNews() {
      try {
        const response = await NewsApi.getById(id);
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          setNews(data.data);
        }
      } catch (error) {
        alert("Thêm tin tức thất bại");
        console.log(error);
      }
    }
    FetchNews();
  }, [id]);

  async function updateNews() {
    try {
      const response = await NewsApi.update(id, news);
      const data = JSON.parse(JSON.stringify(response));
      if (!data.error) {
        alert("Cập nhật thành công");
        navigate(-1);
      }
    } catch (error) {
      alert("Cập nhật thất bại");
      console.log(error);
    }
  }
  // handle change value input
  function handleChangeImage(e) {
    const file = e.target.files[0];
    if (file.type === "image/png" || file.type === "image/jpeg") {
      uploadImage(file);
    } else {
      alert("Mời bạn chọn lại hình ảnh đúng định dạng !");
      e.target.value = null;
    }
  }

  const uploadImage = (file) => {
    try {
      setLoading(true);
      if (!file) return;
      var today = new Date();

      const name =
        file.name +
        today.getDay() +
        ":" +
        today.getHours() +
        ":" +
        today.getMinutes() +
        ":" +
        today.getSeconds() +
        ":" +
        today.getMilliseconds();
      const storageRef = ref(storage, `images/news/avatar/${name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          alert(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setNews({ ...news, nameImage: name, urlImage: downloadURL });
            setLoading(false);
          });
        }
      );
      return true;
    } catch (error) {
      return false;
    }
  };
  const deleteFromFirebaseSingle = (name) => {
    if (!name) return;
    setLoading(true);
    const desertRef = ref(storage, `images/news/avatar/${name}`);
    deleteObject(desertRef)
      .then(() => {
        setNews({ ...news, urlImage: "", nameImage: "" });
        setLoading(false);
      })
      .catch((error) => {
        console.log("not");
      });
  };

  //Func Upload Project
  function submitProject() {
    if (
      news.name === "" ||
      news.content === "" ||
      news.nameImage === "" ||
      news.urlImage === ""
    ) {
      alert("Mời bạn nhập đủ trường thông tin !");
    } else {
      updateNews();
    }
  }
  function cancelProject() {
    navigate(-1);
  }

  return (
    <div className="container">
      <div className="info-page-admin">
        <h2 className="title-page-admin">Cập nhật tin tức</h2>

        <div className="form-group ">
          <label>Tên dự án</label>
          <input
            value={news?.name}
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
            <input
              disabled={news?.nameImage !== "" ? true : false}
              onChange={handleChangeImage}
              type="file"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-12 img-check">
              <img
                className="img-update-news"
                alt=""
                src={news?.urlImage}
              ></img>
              <div
                style={
                  news.nameImage === "" ? { display: "none" } : { display: "" }
                }
                className="delete-img"
              >
                <button
                  onClick={() => deleteFromFirebaseSingle(news?.nameImage)}
                  className="btn btn-danger"
                >
                  <i
                    style={{ fontSize: "15px", color: "white" }}
                    className="fa fa-remove"
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {" "}
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
                value={news?.content}
                onChange={(newContent) => {
                  setNews({ ...news, content: newContent });
                }}
                onBlur={(newContent) => {
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
                Cập nhật
              </button>
              <button
                onClick={cancelProject}
                type="submit"
                className="btn-admin btn btn-danger"
              >
                Hủy bỏ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateNews;
