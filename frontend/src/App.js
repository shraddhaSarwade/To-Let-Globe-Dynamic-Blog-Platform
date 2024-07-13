import React from "react";
import Allblogs from "./Allblogs";
import CreateBlog from "./CreateBlog";
import Login from "./Login";
import Register from "./Register";
import Blog from "./Blog";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/blogs" element={<Allblogs />} />
          <Route path="/showBlog/:id" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/createBlog" element={<CreateBlog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
