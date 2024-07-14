// axiosConfig.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://to-let-globe-dynamic-blog-platform.onrender.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
