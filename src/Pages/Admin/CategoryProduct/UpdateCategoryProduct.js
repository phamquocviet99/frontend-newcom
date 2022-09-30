import { React, useState, useEffect } from "react";
import JoditEditor from "jodit-react";
import CategoryProductApi from "../../../Apis/CategoryProductApi";
import { useNavigate, useParams } from "react-router-dom";
import { storage } from "../../../Apis/FirebaseConfig";
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

function UpdateCategoryProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState({
    name: "",
    avatar: { url: "", name: "" },
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
    if (category.name === "" || category.avatar.url === "") {
      alert("Mời bạn nhập đủ trường thông tin !");
    } else {
      if (UpdateCategory()) {
        navigate(-1);
      }
    }
  }



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
      const storageRef = ref(storage, `images/categories/avatar/${name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => { },
        (error) => {
          alert(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const avatar = { url: downloadURL, name: name }
            setCategory({ ...category, avatar: avatar });
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
    const desertRef = ref(storage, `images/categories/avatar/${name}`);
    deleteObject(desertRef)
      .then(() => {
        const avatar = { url: "", name: "" }
        setCategory({ ...category, avatar: avatar });

      })
      .catch((error) => {
        console.log("not");
      });
  };


  return (
    <div>
      <h2 className="title-page-admin">Chỉnh sửa danh mục</h2>
      <div className="container">
        <div className="input-group">
          <label className="font-label">Tên danh mục :</label>
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
        <div className="form-group">
          <label>Ảnh đại diện tin tức</label>

          <div className="input-group">
            <input
              disabled={category?.avatar?.name !== "" ? true : false}
              onChange={handleChangeImage}
              type="file"
            />
          </div>
        </div>
        <div className="col-md-12 img-check">
          <img
            className="img-update-news"
            alt=""
            src={category?.avatar?.url}
          ></img>
          <div
            style={
              category?.avatar?.name === "" ? { display: "none" } : { display: "" }
            }
            className="delete-img"
          >
            <button
              onClick={() => deleteFromFirebaseSingle(category?.avatar?.name)}
              className="btn btn-danger"
            >
              <i
                style={{ fontSize: "15px", color: "white" }}
                className="fa fa-remove"
              ></i>
            </button>
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
