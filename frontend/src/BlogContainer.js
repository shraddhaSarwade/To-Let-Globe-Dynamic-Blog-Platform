import React, { useState, useEffect } from "react";
import "./BlogContanier.css";
// import BlogCard from "./BlogCard";
import BlogCard from "./BlogCard";

function BlogContainer() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    async function getDataFromBackend() {
      const response = await fetch("/blogs");
      const allBlogs = await response.json();
      setBackendData(allBlogs);
    }
    getDataFromBackend();
  }, []);

  //   console.log(backendData);

  return (
    <div class="container BlogContainer">
      {backendData.map((datapt, i) => (
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
  );
}

export default BlogContainer;
