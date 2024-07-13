import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg custom-navbar" id="navbarborder">
        <div className="container-fluid">
          {/* <div> */}
          <a className="navbar-brand" href="#">
            <img
              src="logo.jpeg"
              alt=""
              style={{ width: "80px", height: "80px" }}
            />
          </a>
          {/* </div> */}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item rounded-pill">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item rounded-pill">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item rounded-pill">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item rounded-pill">
                <a className="nav-link" href="/blogs">
                  Blog
                </a>
              </li>
              <li className="nav-item rounded-pill">
                <a className="nav-link" href="#">
                  Property Listing
                </a>
              </li>
              <li className="nav-item rounded-pill">
                <a className="nav-link" href="/login">
                  Login
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
