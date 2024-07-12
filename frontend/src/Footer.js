import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

function Footer() {
  return (
    <>
      <footer class="py-4 custom-footer">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <h5>To Let Globe</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="#" class="text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" class="text-white">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" class="text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-3">
              <h5>Services</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="#" class="text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" class="text-white">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" class="text-white">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-3">
              <h5>Contact</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="#" class="text-white">
                    Email
                  </a>
                </li>
                <li>
                  <a href="#" class="text-white">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-3">
              <h5>Newsletter</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="#" class="text-white">
                    Sign up to our Newsletter
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-6">
              <p>&copy; 2023 To-Let Globe -- Lucknow</p>
            </div>
            <div class="col-md-6">
              <a href="#" class="m-2">
                <FacebookIcon />
              </a>
              <a href="#" class="m-2">
                <InstagramIcon />
              </a>
              <a href="#" class="m-2">
                <XIcon />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
