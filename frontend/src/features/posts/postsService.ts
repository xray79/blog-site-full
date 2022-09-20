import axios from "axios";

interface postsType {
  _id: string;
  user: string;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
}

const API_URL = "http://localhost:4000/api/posts/";
// const API_URL = "https://blog-api-snav.onrender.com/api/posts/";

// create new post
const createPost = async (postData: postsType, token: string) => {
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

// get my posts
const getMyPosts = async (token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + "getMy", config);
  return response.data;
};

// edit post
const editPost = async (postData: postsType, id: string, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + id, postData, config);
  return response.data;
};

// delete my post
const deletePost = async (id: string, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + id, config);
  return response.data;
};

const postsService = {
  createPost,
  getPosts,
  getMyPosts,
  editPost,
  deletePost,
};

export default postsService;
