import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import "./CreateBlog.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function CreateBlog() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    intro: "",
    image: "",
    content: "",
  });

  const navigate = useNavigate();

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleReset = () => {
    setFormData({
      title: "",
      category: "",
      intro: "",
      image: "",
      content: "",
    });
  };

  const handleContentChange = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      content: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault(); // Prevent the default form submission
    // Send the POST request
    const dataToDB = {
      ...formData,
      author: "Anoynymous",
      role: "Content Creator",
      views: 0,
      likes: 0,
      date: new Date(),
    };
    axios
      .post("/blogs/new", dataToDB)
      .then((response) => {
        console.log("Success:", response.data);
        // Redirect to the /blogs page
        navigate("/blogs");
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error actions, e.g., show error message
      });
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div class="container">
        <div class="row">
          <h3 class="text-center createBlog pt-5 pb-1">Create Blog</h3>

          <div class="col-6 offset-3">
            <form class="custom-form" onSubmit={handleSubmit}>
              <div class="form-group my-3">
                <label for="title" class="custom-label mb-2">
                  Title
                </label>
                <input
                  type="text"
                  class="form-control custom-input"
                  id="title"
                  placeholder="Title goes here!"
                  value={formData.title}
                  name="title"
                  onChange={handleChange}
                />
              </div>

              <div class="form-group my-3">
                <label for="category" class="custom-label my-2">
                  Category
                </label>
                <select
                  class="form-control custom-input"
                  id="category"
                  value={formData.category}
                  name="category"
                  onChange={handleChange}
                >
                  <option>News & Events</option>
                  <option>Feature Updates</option>
                  <option>Brand Collaboration</option>
                  <option>Life at To-Let</option>
                  <option>Internship Campaigns</option>
                  <option>Giveaway & Offers</option>
                </select>
              </div>

              <div class="form-group my-3">
                <label for="intro" class="custom-label my-2">
                  Intro
                </label>
                <input
                  type="text"
                  class="form-control custom-input"
                  id="intro"
                  placeholder="Brief Introduction!"
                  value={formData.intro}
                  name="intro"
                  onChange={handleChange}
                />
              </div>

              <div class="form-group">
                <label for="image" class="custom-label my-2 d-block">
                  Upload Image
                </label>
                <input
                  type="text"
                  class="form-control-file custom-input"
                  id="image"
                  value={formData.image}
                  name="image"
                  onChange={handleChange}
                />
              </div>

              {/* <div class="form-group">
                <label for="image" class="custom-label my-2 d-block">
                  Upload Image
                </label>
                <input
                  type="file"
                  class="form-control-file custom-input"
                  id="image"
                  value={}
                />
              </div> */}

              <div className="form-group">
                <label
                  htmlFor="content"
                  className="form-label custom-label my-3"
                >
                  Content
                </label>
                <ReactQuill
                  //   onChange={handleChange}
                  modules={CreateBlog.modules}
                  formats={CreateBlog.formats}
                  id="content"
                  value={formData.content}
                  name="content"
                  onChange={handleContentChange}
                />
              </div>

              <div class="my-3 d-flex justify-content-between">
                <button type="submit" class="btn btn-primary toLetButton">
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  class="btn btn-primary toLetButton"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

CreateBlog.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    [("bold", "italic", "underline", "strike", "blockquote")],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
};

CreateBlog.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

export default CreateBlog;
