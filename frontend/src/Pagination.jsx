import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import "./Pagination.css";

function Pagination({ noOfBlogs, paginate, currentPg }) {
  console.log(noOfBlogs);

  const paginationLIs = [];
  const totalPgs = Math.ceil(noOfBlogs / 6);

  for (let i = 1; i <= totalPgs; i++) {
    paginationLIs.push(i);
  }

  console.log(paginationLIs);
  return (
    <div className="Pagination">
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li
            className={`page-item ${currentPg === 1 ? "disabled" : ""}`}
            onClick={() => {
              paginate(currentPg - 1);
            }}
          >
            <a className="page-link" href="#" tabIndex="-1">
              <NavigateBeforeIcon />
              Previous
            </a>
          </li>
          {paginationLIs.map((pgNo) => (
            <li
              className={`page-item ${currentPg === pgNo ? "active" : ""}`}
              onClick={() => {
                paginate(pgNo);
              }}
            >
              <a className="page-link" href="#">
                {pgNo}
              </a>
            </li>
          ))}

          <li
            className={`page-item ${currentPg === totalPgs ? "disabled" : ""}`}
            onClick={() => {
              paginate(currentPg + 1);
            }}
          >
            <a className="page-link" href="#">
              Next <NavigateNextIcon />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
