import React from "react";
import "./ProcessDev.css";
function ProcessDev() {
  return (
    <div className="container">
      <div className="title-about">
        <h3 className="font-title text-center">
          QUÁ TRÌNH PHÁT TRIỂN CỦA CÔNG TY
        </h3>
      </div>
      <div className="bar-process">
        <div
          style={{ backgroundColor: "#ca7f3d" }}
          className="sub-bar-process-1"
        >
          <h3>2006</h3>
          <div className="content-bar">
            <div className="content-sub-bar">
              <div></div>
              <p>Thành viên : 50 người</p>
            </div>
            <div style={{ height: "20px" }}></div>
            <div className="content-sub-bar">
              <div></div>
              <p>Diện tích : 500 mét vuông </p>
            </div>
          </div>
        </div>
        <div className="group-sub-bar-process-2">
          <div
            style={{ backgroundColor: "#ffb371" }}
            className="sub-bar-process-2"
          >
            <h3>2008</h3>
            <div className="content-bar">
              <div className="content-sub-bar">
                <div></div>
                <p>50 người</p>
              </div>
              <div style={{ height: "20px" }}></div>
              <div className="content-sub-bar">
                <div></div>
                <p> 500 mét vuông </p>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#ffc18a" }}
            className="sub-bar-process-3"
          >
            <h3>2010</h3>
            <div className="content-bar">
              <div className="content-sub-bar">
                <div></div>
                <p>1 Showroom</p>
              </div>
              <div style={{ height: "20px" }}></div>
              <div className="content-sub-bar">
                <div></div>
                <p> 10.000 mét vuông </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bar-process">
        <div className="group-sub-bar-process-2 fix-width">
          <div
            style={{ backgroundColor: "#18DFEF" }}
            className="sub-bar-process-2 fix"
          >
            <h3>2013</h3>
            <div className="content-bar">
              <div className="content-sub-bar">
                <div></div>
                <p>2 Showroom</p>
              </div>
              <div style={{ height: "20px" }}></div>
              <div className="content-sub-bar">
                <div></div>
                <p> 10.000 mét vuông </p>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#0AB9C7" }}
            className="sub-bar-process-3 fix"
          >
            <h3>2016</h3>
            <div className="content-bar">
              <div className="content-sub-bar">
                <div></div>
                <p>200 người</p>
              </div>
              <div style={{ height: "20px" }}></div>
              <div className="content-sub-bar">
                <div></div>
                <p> 20.000 mét vuông </p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundColor: "#2C838A" }}
          className="sub-bar-process-1 fix-width"
        >
          <h3>2021</h3>
          <div className="content-bar">
            <div className="content-sub-bar">
              <div></div>
              <p>Hơn 220 người</p>
            </div>
            <div style={{ height: "20px" }}></div>
            <div className="content-sub-bar">
              <div></div>
              <p> 30.000 mét vuông </p>
            </div>
          </div>
          <div className="content-bar">
            <div className="content-sub-bar">
              <div></div>
              <p>40*40HC conts/tháng</p>
            </div>
            <div style={{ height: "20px" }}></div>
            <div className="content-sub-bar">
              <div></div>
              <p>Hơn 8 triệu USD/năm </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProcessDev;
