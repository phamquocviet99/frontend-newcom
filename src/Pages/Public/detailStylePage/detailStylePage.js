import React from "react";
import "./detailStylePage.css";
import { BiTimeFive } from "react-icons/bi";
import BoxStyleRight from "../../../Components/boxStyleRight/boxStyleRight";

function DetailStylePage() {
  return (
    <div>
      <div className="hero-image-style" />
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-9">
            <div className="title-detail-style">
              <h3>
                Nghề thủ công Việt Nam vốn có truyền thống từ lâu đời. Truyền
                thống đó gắn liền với nền văn minh lúa nước, gắn với những tên
                làng nghề
              </h3>
              <div className="time-detail">
                <BiTimeFive style={{ fontSize: "20px" }} />
                <p>9:9 - 2022</p>
              </div>
              <div style={{display:"flex",justifyContent:"end"}}>
                
                <div className="line-detail"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9">
            Phong cách Art Deco được biết biết đến là một trường phái nghệ
            thuật, trang trí mang đậm tính chiết trung, ra đời vào năm 1920 ở
            Paris và bắt đầu lan rộng ra toàn thế giới trong những năm 30. Phong
            cách thiết kế này được pha trộn từ rất nhiều trường phái khác nhau
            như tân cổ điển, hiện đại, tân nghệ thuật, lập thể, tương lai,…. Do
            đó, nó có ảnh hưởng đến hầu hết các lĩnh vực thiết kế như nội thất,
            kiến trúc, thời trang,… cùng nhiều môn nghệ thuật thị giác khác như
            điện ảnh, hội họa.
          </div>
          <div className="col-md-3">
            <div className="right-detail-style">
              <div className="name-detail-style">
                <p>Tin tức liên quan</p>
              </div>
              <BoxStyleRight />
              <BoxStyleRight />
              <BoxStyleRight />
              <BoxStyleRight />
              <BoxStyleRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailStylePage;
