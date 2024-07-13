import React from "react";
import "./Toggle.css";
function Toggle() {
  return (
    <div className="container outer my-5">
      <div className="row d-flex justify-content-between">
        <div className="col-3 togglecontainer">
          <button type="button" className="btn custom btn-lg">
            Trending
          </button>

          <button type="button" className="btn custom btn-lg">
            Latest
          </button>
        </div>
        <div className="col-3 togglecontainer">
          <a type="button" className="btn custom btn-lg" href="/createBlog">
            Create Blog
          </a>
        </div>
      </div>
    </div>
  );
}

export default Toggle;
