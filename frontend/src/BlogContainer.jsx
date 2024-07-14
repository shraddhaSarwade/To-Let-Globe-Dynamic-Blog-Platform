import React, { useState, useEffect } from "react";
import "./BlogContanier.css";
// import BlogCard from "./BlogCard";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";
import Toggle from "./Toggle";

// Component to Display Six Blogs from all Blog Data in Card form
function BlogContainer() {
  const [backendData, setBackendData] = useState([{}]);

  const [isLatest, setIsLatest] = useState(true);

  const [currentPg, setCurrentPg] = useState(1);

  async function getDataFromBackend() {
    const response = await fetch("/blogs");
    const allBlogs = await response.json();
    setBackendData(allBlogs.reverse());
  }

  useEffect(() => {
    getDataFromBackend();
  }, []);

  const handleClickLatest = () => {
    getDataFromBackend();

    setIsLatest(true);
  };

  const handleClickTrending = () => {
    backendData.sort((a, b) => {
      const sumA = a.views + a.likes;
      const sumB = b.views + b.likes;

      if (sumA > sumB) {
        return -1;
      }
      if (sumA < sumB) {
        return 1;
      }
    });
    setBackendData(backendData);
    setIsLatest(false);
  };

  const indexOfLastBlog = 6 * currentPg;
  const indexOfFirstBlog = indexOfLastBlog - 6;
  const sixBlogData = backendData.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pgNo) => {
    setCurrentPg(pgNo);
  };

  return (
    <>
      <Toggle
        isLatest={isLatest}
        handleClickLatest={handleClickLatest}
        handleClickTrending={handleClickTrending}
      />

      <div className="container BlogContainer">
        {sixBlogData.map((datapt) => (
          <BlogCard
            key={datapt._id}
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
