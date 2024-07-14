const blog_seed_data = require("./seed_data");
const Blog = require("../models/blogs");
const mongoose = require("mongoose");

mongoose
  // .connect(mongoDBAtlasURL)
  .connect("mongodb://localhost:27017/To-Let-Globe-Blogs")
  .then(() => {
    console.log("Connected to database..");
  })
  .catch((err) => {
    console.log("Error connecting to the database..", err);
  });

const seedDB = async () => {
  await Blog.deleteMany({});

  for (let i = 0; i < blog_seed_data.length; i++) {
    const blog = new Blog({
      title: blog_seed_data[i].title,
      author: blog_seed_data[i].author,
      content: blog_seed_data[i].content,
      image: blog_seed_data[i].image,
      date: blog_seed_data[i].date,
      role: blog_seed_data[i].role,
      category: blog_seed_data[i].category,
      views: blog_seed_data[i].views,
      likes: blog_seed_data[i].likes,
      intro: blog_seed_data[i].intro,
    });
    await blog.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
  console.log("Data seeded and connection closed..");
});
