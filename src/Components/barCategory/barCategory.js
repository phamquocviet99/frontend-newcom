import React from "react";
import "./barCategory.css";

function BarCategory({category}) {
  return (
    <div className="bar-category">
      <h4>{category?.name}</h4>
    </div>
  );
}

export default BarCategory;
