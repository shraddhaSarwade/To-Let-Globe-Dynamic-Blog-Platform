const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: String,
  author: String,
  content: String,
  image: String,
});

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
