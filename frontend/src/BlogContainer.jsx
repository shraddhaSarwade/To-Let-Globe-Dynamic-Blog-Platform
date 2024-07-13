import React, { useState, useEffect } from "react";
import "./BlogContanier.css";
// import BlogCard from "./BlogCard";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";

function BlogContainer() {
  const [backendData, setBackendData] = useState([{}]);

  const [currentPg, setCurrentPg] = useState(1);

  useEffect(() => {
    async function getDataFromBackend() {
      const response = await fetch("/blogs");
      const allBlogs = await response.json();
      setBackendData(allBlogs.reverse());
    }
    getDataFromBackend();
  }, []);

  const indexOfLastBlog = 6 * currentPg;
  const indexOfFirstBlog = indexOfLastBlog - 6;
  const sixBlogData = backendData.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pgNo) => {
    setCurrentPg(pgNo);
  };

  return (
    <>
      <div className="container BlogContainer">
        {sixBlogData.map((datapt, i) => (
          <BlogCard
            //   key={datapt._id}
            id={datapt._id}
            title={datapt.title}
            author={datapt.author}
            content={datapt.content}
            image={datapt.image}
            role={datapt.role}
            category={datapt.category}
            views={datapt.views}
            likes={datapt.likes}
            date={datapt.date}
            intro={datapt.intro}
          />
        ))}
      </div>
      <Pagination
        noOfBlogs={backendData.length}
        paginate={paginate}
        currentPg={currentPg}
      />
    </>
  );
}

export default BlogContainer;
