import React from "react";
import "./Toggle.css";
function Toggle() {
  return (
    <div class="outer my-5">
      <div class="togglecontainer">
        {/* <div class="btn-group" role="group" aria-label="Basic example"> */}
        <button type="button" className="btn custom btn-lg">
          Trending
        </button>

        <button type="button" className="btn custom btn-lg">
          Latest
        </button>
      </div>
    </div>
    // </div>
  );
}

export default Toggle;
