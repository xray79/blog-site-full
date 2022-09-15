import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postsService from "./postsService";

interface postsType {
  title: string;
  body: string;
}

interface initialStateType {
  posts: postsType[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

const initialState: initialStateType = {
  posts: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get all posts
export const getPosts = createAsyncThunk(
  "/posts/getAll",
  async (_, thunkAPI) => {
    try {
      // @ts-ignore
      const token: string = thunkAPI.getState().auth.user.token;
      return await postsService.getPosts(token);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Create new post
export const createPost = createAsyncThunk(
  "posts/create",
  async (postData: any, thunkAPI) => {
    try {
      // @ts-ignore
      const token: string = thunkAPI.getState().auth.user.token;
      return await postsService.createPost(postData, token);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.posts.push(action.payload);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      })
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      });
  },
});

export const { reset } = postsSlice.actions;
export default postsSlice.reducer;
