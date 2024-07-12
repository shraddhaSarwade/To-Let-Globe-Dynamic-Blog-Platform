import React from "react";
import BlogCard from "./BlogCard";

const BlogList = () => {
  const blogs = [
    {
      title: "Full Stack Developer",
      author: "Bhaumik Kore 2217",
      content: "Lorem ipsum dolor sit amet consectetur...",
      category: "News & Events",
      date: "2 Nov, 2023",
    },
    {
      title: "Full Stack Developer",
      author: "Bhaumik Kore 2217",
      content: "Lorem ipsum dolor sit amet consectetur...",
      category: "Feature Updates",
      date: "2 Nov, 2023",
    },
    // Add more blog entries as needed
  ];

  return (
    <div>
      {blogs.map((blog, index) => (
        <BlogCard
          key={index}
          title={blog.title}
          author={blog.author}
          content={blog.content}
          category={blog.category}
          date={blog.date}
        />
      ))}
    </div>
  );
};

export default BlogList;
