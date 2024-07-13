import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import DateCategory from "./DateCategory";
import Views from "./Views";
import Likes from "./Likes";
import AuthorDetails from "./AuthorDetails";
import "./Blog.css";
import axios from "axios";

function Blog() {
  const { id } = useParams();

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    async function getDataFromBackend() {
      // const blog = await axios.get(`/blogs/${id}`);
      const response = await fetch(`/blogs/${id}`);
      const blog = await response.json();
      setBackendData(blog);
    }
    getDataFromBackend();
  }, []);

  console.log(backendData);

  return (
    <div>
      <Navbar />
      <div class="container" id="blogContainer">
        <DateCategory date={backendData.date} category={backendData.category} />
        <h1 class="my-3">{backendData.title}</h1>
        <div class="row">
          <div class="col-2">
            <AuthorDetails
              author={backendData.author}
              role={backendData.role}
            />
          </div>
          <div class="col-10"></div>
        </div>
        <div
          class="row d-flex justify-content-between py-3 my-3"
          id="borderrow"
        >
          <div class="col-2 p-0 d-flex flex-start">
            {/* <div class="col-4 p-0 d-flex justify-content-between"> */}
            <div class="col-4 p-0 d-inline">
              <Views views={backendData.views} />
            </div>
            <div class="col-4 p-0 d-inline">
              <Likes likes={backendData.likes} />
            </div>
            {/* </div> */}
            {/* <Views views={backendData.views} /> */}
            {/* <Likes likes={backendData.likes} /> */}
          </div>
          <div class="col-1">
            <span class="text-decoration-underline" id="read">
              6 min read
            </span>
          </div>
        </div>

        <div class="row my-5" id="intro">
          {backendData.intro}
        </div>

        <div class="row">
          <img class="img-fluid" src={backendData.image} height="70vh" />
        </div>

        <div
          class="row my-5"
          id="content"
          dangerouslySetInnerHTML={{ __html: backendData.content }}
        >
          {/* {backendData.content} */}
        </div>

        <div class="row">
          <a class="btn btn-primary toLetButton" href="/blogs">
            Back to All Blogs
          </a>
        </div>
      </div>
    </div>
  );
}

export default Blog;
