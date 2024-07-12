import React from "react";
import Allblogs from "./Allblogs";
import CreateBlog from "./CreateBlog";
import AuthPage from "./AuthPage";
import Blog from "./Blog";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/blogs" element={<Allblogs />} />
        </Routes>
        <Routes>
          <Route path="/showBlog/:id" element={<Blog />} />
        </Routes>
        <Routes>
          <Route path="/authPage" element={<AuthPage />} />
        </Routes>
        <Routes>
          <Route path="/createBlog" element={<CreateBlog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
