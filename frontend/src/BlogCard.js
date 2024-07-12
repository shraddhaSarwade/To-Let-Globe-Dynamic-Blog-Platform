import React from "react";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import "./BlogCard.css";
import DateCategory from "./DateCategory";
import Views from "./Views";
import Likes from "./Likes";
import AuthorDetails from "./AuthorDetails";

const BlogCard = ({
  id,
  title,
  author,
  content,
  image,
  role,
  category,
  views,
  likes,
  date,
  intro,
}) => {
  return (
    <div class="card" style={{ width: "30%", height: "70vh" }}>
      {/* <div class="card" style={{ width: "30%" }}> */}
      <img
        src={image}
        class="card-img-top"
        alt="..."
        height="40%"
        style={{ objectFit: "cover" }}
      />
      <div class="row">
        <div class="card-body" id="#nopadding">
          <p class="card-text">
            <DateCategory date={date} category={category} />
          </p>

          <div
            style={{
              height: "20vh",
              overflow: "hidden",
              //   textOverflow: "ellipses",
              //   whiteSpace: "nowrap",
            }}
          >
            <h5 class="card-title">{title}</h5>
            <p
              class="card-text"
              style={{
                height: "20vh",
                overflow: "hidden",
                textOverflow: "ellipsis",
                marginBottom: "16px",
              }}
            >
              {intro}
            </p>
          </div>

          <div>
            <a class="readmore btn" href={`/showBlog/${id}`}>
              Read More <TrendingFlatIcon />
            </a>
          </div>

          <div class="container-fluid p-0">
            <div class="row">
              <div class="col-8">
                <AuthorDetails author={author} role={role} />
              </div>
              <div class="col-4 p-0 d-flex justify-content-between">
                <div class="col-6 p-0 d-inline">
                  <Views views={views} />
                </div>
                <div class="col-5 p-0 d-inline">
                  <Likes likes={likes} />
                </div>
              </div>
            </div>
          </div>

          {/* <div class="container-fluid p-0">
            <div class="row justify-content-between">
              <div class="col-2 p-0">
                <img
                  class="rounded-circle"
                  src="avatar.png"
                  width="47px"
                  alt="..."
                />
              </div>

              <div class="col-10">
                <div class="row justify-content-between">
                  <div class="col-8 p-0">
                    <span>{author}</span>
                  </div>

                  <div class="blogmetadata col-4 p-0">
                    <Views views={views} />
                    <Likes likes={likes} />
                  </div>
                </div>

                <div class="row">
                  <span class="blogmetadata p-0">{role}</span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
