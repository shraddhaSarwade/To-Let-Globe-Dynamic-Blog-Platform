import React from "react";
import "./Toggle.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Toggle({ isLatest, handleClickLatest, handleClickTrending }) {
  const navigate = useNavigate();

  const handleCreateBlog = async () => {
    await axios
      .post("/createBlog/auth")
      .then((response) => {
        if (response.data.isAuth === true) {
          navigate("/createBlog");
        } else {
          alert("Please login as Content Creator to post a Blog!");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="container outer my-5">
      <div className="row d-flex justify-content-between">
        <div className="col-3 togglecontainer">
          <button
            type="button"
            className={`btn custom btn-lg ${isLatest ? "active" : ""}`}
            onClick={handleClickLatest}
          >
            Latest
          </button>
          <button
            type="button"
            className={`btn custom btn-lg ${!isLatest ? "active" : ""}`}
            onClick={handleClickTrending}
          >
            Trending
          </button>
        </div>
        <div className="col-3 togglecontainer">
          <a
            type="button"
            className="btn custom btn-lg"
            // href="/createBlog"
            onClick={handleCreateBlog}
          >
            Create Blog
          </a>
        </div>
      </div>
    </div>
  );
}

export default Toggle;
