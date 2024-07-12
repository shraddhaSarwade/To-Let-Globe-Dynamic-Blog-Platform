import React from "react";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import "./Category.css";

const Category = ({ title, imgurl }) => {
  return (
    <div id="categoryCard" class="card" style={{ width: "25%" }}>
      <img src={imgurl} class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">
          {title}{" "}
          <a class="btn" href="#">
            <TrendingFlatIcon style={{ color: "#5aa79f" }} />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Category;
