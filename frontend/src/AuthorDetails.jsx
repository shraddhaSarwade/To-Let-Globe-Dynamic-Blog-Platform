import React from "react";
import "./AuthorDetails.css";

function AuthorDetails({ author, role }) {
  return (
    <div class="container">
      <div class="row">
        <div class="col-3 mr-4 p-0 pt-1">
          <img class="rounded-circle" src="avatar.png" width="35px" alt="..." />
        </div>
        <div class="col-9 p-0">
          <div class="row" id="author">
            {author}
          </div>
          <div class="row" id="role">
            {role}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthorDetails;
