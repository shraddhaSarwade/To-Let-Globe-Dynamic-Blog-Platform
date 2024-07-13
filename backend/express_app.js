const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Blog = require("./models/blogs");
const User = require("./models/user");
const methodOverride = require("method-override");
const bcrypt = require("bcrypt");
const session = require("express-session");

mongoose
  .connect("mongodb://localhost:27017/To-Let-Globe-Blogs")
  .then(() => {
    console.log("Connected to database..");
  })
  .catch((err) => {
    console.log("Error connecting to the database..", err);
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "ABCD1234",
    resave: false,
    saveUninitialized: false,
    // cookie: { secure: false },
  })
);

app.use((req, res, next) => {
  console.log("Session data before route:", req.session);
  next();
});

app.get("/blogs", async (req, res) => {
  const blogs = await Blog.find({});
  res.json(blogs);
});

app.post("/register", async (req, res) => {
  const { username, password, role } = req.body;
  const hash = await bcrypt.hash(password, 12);
  const newUser = new User({ username: username, password: hash, role: role });
  await newUser.save();

  req.session.user_id = newUser._id;
  req.session.user_name = newUser.username;
  req.session.user_role = newUser.role;
  req.session.save((err) => {
    if (err) {
      console.log(err);
      res.send("Error saving session");
    } else {
      console.log(req.session);
      res.json({ isRegiter: true });
    }
  });
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username: username });
  if (!user) {
    res.json({ isLogin: false });
  } else {
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
      req.session.user_id = user._id;
      req.session.user_name = user.username;
      req.session.user_role = user.role;
      req.session.save((err) => {
        if (err) {
          console.log(err);
          res.send("Error saving session");
        } else {
          console.log(req.session);
          res.json({ isLogin: true });
        }
      });
      //   res.send("Welcome");
    } else {
      console.log("Error");
      res.json({ isLogin: false });
    }
  }
});

app.post("/logInStatus", (req, res) => {
  if (req.session.user_id) {
    res.json({ isLoggedIn: true });
  } else {
    res.json({ isLoggedIn: false });
  }
});

app.post("/createBlog/auth", async (req, res) => {
  if (
    (req.session.user_id && req.session.user_role === "content-creator") ||
    (req.session.user_id && req.session.user_role === "admin")
  ) {
    res.json({ isAuth: true });
  } else {
    res.json({ isAuth: false });
  }
});

app.post("/blogs/new", async (req, res) => {
  const newBlog = new Blog(req.body);
  await newBlog.save();
  res.send("success");
});

app.post("/blogs/updateViews/:id", async (req, res) => {
  const { id } = req.params;
  const updatedBlog = await Blog.findByIdAndUpdate(id, req.body);
  res.send("success");
});

app.post("/blogs/updateLikes/:id", async (req, res) => {
  const { id } = req.params;
  const updatedBlog = await Blog.findByIdAndUpdate(id, req.body);
  res.send("success");
});

app.get("/blogs/:id", async (req, res) => {
  const { id } = req.params;
  const blog = await Blog.findById(id);
  res.json(blog);
});

app.post("/getuserdata", (req, res) => {
  res.json({ username: req.session.user_name, role: req.session.user_role });
});

app.post("/logout", (req, res) => {
  req.session.destroy();
  res.send("Logged Out");
});

app.use((req, res, next) => {
  console.log("Session data after route:", req.session);
  next();
});

app.listen(4000, () => {
  console.log("Serving on port 4000..");
});
