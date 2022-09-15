import axios from "axios";

const API_URL = "http://localhost:4000/api/users/";
// const API_URL = "https://blog-api-snav.onrender.com/api/users/";

// register user
const register = async (userData: any) => {
  const response = await axios.post(API_URL + "register", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// logout user
const logout = () => {
  localStorage.removeItem("user");
};

// login user
const login = async (userData: any) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
