import React from "react";
// import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import "./BlogCard.css";

const BlogCard = ({ title, author, content, category, date }) => {
  return (
    <div class="card" style={{ width: "30%" }}>
      <img
        src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHklMjByZW50YWx8ZW58MHx8MHx8fDA%3D"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <p class="card-text">
          2 Nov, 2023 | <a href="#">News & Events</a>
        </p>
        <h5 class="card-title">Collaboration and Partnership Update!</h5>
        <p class="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec velit
          nunc, lacinia id facilisis non, varius in eros. Vivamus et metus urna.
          Vestibulum sollicitudin accumsan vehicula. Aliquam maximus auctor
          tortor. Mauris porttitor condimentum urna, quis posuere arcu.
        </p>

        <a class="readmore btn" href="#">
          Read More <TrendingFlatIcon />
        </a>

        {/* <a href="#" class="btn btn-primary">
          Go somewhere
        </a> */}
        <div class="container-fluid p-0">
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
                  <span>Shraddha Sarwade</span>
                </div>

                <div class="blogmetadata col-4 p-0">
                  <span>
                    <VisibilityTwoToneIcon />
                    20
                  </span>
                  <span>
                    <FavoriteBorderIcon />
                    12
                  </span>

                  {/* <span>
                    <img
                      src="./assets/star-bookmark-favorite-shape-rank-16-28621.svg"
                      alt=""
                    />
                    <img
                      src="./assets/star-bookmark-favorite-shape-rank-16-28621.svg"
                      alt=""
                    />
                    <img
                      src="./assets/star-bookmark-favorite-shape-rank-16-28621.svg"
                      alt=""
                    />
                    <img
                      src="./assets/star-bookmark-favorite-shape-rank-16-28621.svg"
                      alt=""
                    />
                  </span> */}
                </div>
              </div>

              <div class="row">
                <span class="blogmetadata p-0">Full Stack Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
