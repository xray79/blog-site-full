import axios from "axios";

const API_URL = "http://localhost:4000/api/posts/";
// const API_URL = "https://blog-api-snav.onrender.com/api/posts/";

// create new post
const createPost = async (postData: any, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, postData, config);
  return response.data;
};

// get all posts
const getPosts = async (token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);
  return response.data;
};

const postsService = {
  createPost,
  getPosts,
};

export default postsService;
