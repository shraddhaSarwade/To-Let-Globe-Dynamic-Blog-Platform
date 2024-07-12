import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import BlogList from "./BlogList";
import BlogContainer from "./BlogContainer";
import Toggle from "./Toggle";
import "./App.css";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    async function getDataFromBackend() {
      const response = await fetch("/blogs");
      const allBlogs = await response.json();
      console.log(allBlogs);
    }
    getDataFromBackend();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="insights container mt-4 text-center">
        <h2>Our Insights and Stories</h2>
        <p>Lorem Ipsum dolor sit amet consesctetur.Eu tincidunt.</p>
      </div>

      <Toggle />
      <BlogContainer />

      <Footer />
    </div>
  );
}

export default App;
