const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Blog = require("./models/blogs");
const methodOverride = require("method-override");

mongoose
  .connect("mongodb://localhost:27017/To-Let-Globe-Blogs")
  .then(() => {
    console.log("Connected to database..");
  })
  .catch((err) => {
    console.log("Error connecting to the database..", err);
  });

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/blogs", async (req, res) => {
  const blogs = await Blog.find({});
  res.json(blogs);
  //   res.json({ users: ["a", "b", "c"] });
});

// app.get("/campgrounds/new", (req, res) => {
//   res.render("campgrounds/new");
// });

// app.post("/blogs/new", async (req, res) => {
//   const newBlog = new Blog(req.body.blog);
//   await newBlog.save();
//   res.json(`/blogs/${campground._id}`);
// });

// app.get("/campgrounds/:id/edit", async (req, res) => {
//   const { id } = req.params;
//   const campground = await Campground.findById(id);
//   res.render("campgrounds/edit", { campground });
// });

// app.put("/campgrounds/:id/edit", async (req, res) => {
//   const { id } = req.params;
//   await Campground.findByIdAndUpdate(id, { ...req.body.campground });
//   res.redirect(`/campgrounds/${id}`);
// });

app.get("/blogs/:id", async (req, res) => {
  const { id } = req.params;
  const blog = await Blog.findById(id);
  res.json(blog);
});

// app.delete("/campgrounds/:id/delete", async (req, res) => {
//   const { id } = req.params;
//   await Campground.findByIdAndDelete(id);
//   res.redirect("/campgrounds");
// });

app.listen(4000, () => {
  console.log("Serving on port 4000..");
});
