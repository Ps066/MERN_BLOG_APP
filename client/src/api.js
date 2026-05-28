import axios from "axios";

export default axios.create({
  baseURL: "https://YOUR_RENDER_BACKEND_URL.onrender.com/api",
});