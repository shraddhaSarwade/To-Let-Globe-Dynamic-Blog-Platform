import React from "react";
import "./Toggle.css";
function Toggle() {
  return (
    <div class="container outer my-5">
      <div class="row d-flex justify-content-between">
        <div class="col-3 togglecontainer">
          <button type="button" className="btn custom btn-lg">
            Trending
          </button>

          <button type="button" className="btn custom btn-lg">
            Latest
          </button>
        </div>
        <div class="col-3 togglecontainer">
          <a type="button" className="btn custom btn-lg" href="/createBlog">
            Create Blog
          </a>
        </div>
      </div>
    </div>
  );
}

export default Toggle;
