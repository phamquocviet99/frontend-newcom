import React, { useEffect, useLayoutEffect, useState } from "react";
import "./Product.css";
import { useNavigate } from "react-router-dom";
import JoditEditor from "jodit-react";
import CategoryProductApi from "../../../Apis/CategoryProductApi";
import { async } from "@firebase/util";
import useFirebase from "../../../Apis/firebaseCD";
import { NavItem } from "react-bootstrap";
import ProductApi from "../../../Apis/ProductApi";
function CreateProduct() {
  const navigate = useNavigate();
  const [selectAvatar, setSelectAvatar] = useState(null);
  const [listSelectImage, setListSelectImage] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    size: "",
    uses: "",
    description: "",
    idCategory: "",
    avatar: { url: "", name: "" },
    image: [],
  });
  const [listCategory, setListCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const uploadProductToServer = async () => {
      try {
        const response = await ProductApi.create(product);
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          alert("Thêm sản phẩm thành công");
          navigate(-1);
        }
      } catch (error) {
        alert("Thêm sản phẩm thất bại");
        console.log(error);
      }
    };
    if (product.image.length !== 0) {
      uploadProductToServer();
    }
  }, [product.image]);
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
  }, []);

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
  //  Handle Change Image
  function handleChangeImage(e) {
    if (e.target.files.length > 0) {
      for (const file of e.target.files) {
        if (file.type === "image/png" || file.type === "image/jpeg") {
          const listImg = listSelectImage;
          listImg.push(file);
          setListSelectImage(listImg);
        } else {
          alert("Mời bạn chọn lại hình ảnh đúng định dạng !");
          e.target.value = null;
          break;
        }
      }
    }
    e.target.value = null;
    setLoading((prevState) => !prevState);
  }

  function handleDeleteImage(file) {
    const listImg = listSelectImage;
    for (var i = 0; i < listImg.length; i++) {
      if (listImg[i].name === file.name) {
        listImg.splice(i, 1);
      }
    }
    setListSelectImage(listImg);
    setLoading((prevState) => !prevState);
  }

  function submitProduct() {
    if (
      product.name === "" ||
      product.idCategory === "" ||
      selectAvatar === null ||
      listSelectImage.length === 0
    ) {
      alert("Mời bạn nhập đủ trường thông tin");
    } else {
      PreUploadProduct();
    }

    async function PreUploadProduct() {
      const avatar = await useFirebase.uploadSingleImage(
        selectAvatar,
        "product/avatar"
      );
      if (avatar) {
        const image = await useFirebase.uploadMultiFile(
          listSelectImage,
          "product/images"
        );
        if (image) {
          setProduct({ ...product, avatar: avatar, image: image });
        } else {
          alert("Tải hình ảnh thất bại");
        }
      } else {
        alert("Tải hình ảnh đại diện thất bại !");
      }
    }
  }

  return (
    <div className="container">
      <div className="info-page-admin">
        <h2 className="title-page-admin">Thêm mẫu sản phẩm mới</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group ">
              <label>Tên mẫu sản phẩm</label>
              <input
                onChange={(e) => {
                  setProduct({ ...product, name: e.target.value });
                }}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Danh mục</label>
              <select
                style={{ fontSize: "16px" }}
                className=" form-select form-control"
                defaultValue={"DEFAULT"}
                onChange={(e) => {
                  setProduct({ ...product, idCategory: e.target.value });
                }}
              >
                <option value="DEFAULT" disabled>
                  Chọn danh mục
                </option>
                {listCategory.map((c, index) => (
                  <option value={c._id} key={index}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            <div className=" form-group">
              <label>Kích thước</label>
              <input
                onChange={(e) => {
                  setProduct({ ...product, size: e.target.value });
                }}
                className="form-control"
              />
            </div>
            <div className=" form-group">
              <label>Công dụng</label>
              <input
                onChange={(e) => {
                  setProduct({ ...product, uses: e.target.value });
                }}
                className="form-control"
              />
            </div>
            <div className=" form-group">
              <label>Các hình ảnh về cây (chọn được nhiều ảnh)</label>

              <div className="input-group">
                <input onChange={handleChangeImage} multiple type="file" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
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
          </div>
        </div>
        <div className="row">
          {listSelectImage ? (
            listSelectImage?.map((img, index) => (
              <div key={index} className="col-md-3">
                <div className="box-img-update">
                  <img alt="" src={URL.createObjectURL(img)}></img>
                  <div className="delete-img">
                    <button
                      onClick={() => handleDeleteImage(img)}
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
            ))
          ) : (
            <></>
          )}
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
                onChange={(newContent) => {
                  setProduct({ ...product, description: newContent });
                }}
                onBlur={(newContent) => {
                  setProduct({ ...product, description: newContent });
                }}
                className="form-control"
                tabIndex={1}
              />
            </div>
            <div className="group-btn">
              <button
                onClick={submitProduct}
                // disabled={loading}
                type="submit"
                className="btn-admin btn btn-primary"
              >
                Thêm sản phẩm
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

export default CreateProduct;
