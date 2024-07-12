import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg custom-navbar" id="navbarborder">
        <div class="container-fluid">
          {/* <div> */}
          <a class="navbar-brand" href="#">
            <img
              src="logo.jpeg"
              alt=""
              style={{ width: "80px", height: "80px" }}
            />
          </a>
          {/* </div> */}

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item rounded-pill">
                <a class="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item rounded-pill">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item rounded-pill">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li class="nav-item rounded-pill">
                <a class="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li class="nav-item rounded-pill">
                <a class="nav-link" href="#">
                  Property Listing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
