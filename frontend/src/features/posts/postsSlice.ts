import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postsService from "./postsService";

interface postsType {
  _id: string;
  user: string;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
}

interface initialStateType {
  posts: postsType[];
  myPosts: postsType[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

const initialState: initialStateType = {
  posts: [],
  myPosts: [],
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

// Get my posts
export const getMyPosts = createAsyncThunk(
  "/posts/getMy",
  async (_, thunkAPI) => {
    try {
      // @ts-ignore
      const token: string = thunkAPI.getState().auth.user.token;
      return await postsService.getMyPosts(token);
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

// Edit post
// export const editPost = createAsyncThunk(
//   "posts/edit",
//   async (postData: any, id: string, thunkAPI) => {
//     try {
//       // @ts-ignore
//       const token: string = thunkAPI.getState().auth.user.token;
//       return await postsService.editPost(postData, id, token);
//     } catch (error: any) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// Delete post
export const deletePost = createAsyncThunk(
  "posts/delete",
  async (id: string, thunkAPI) => {
    try {
      // @ts-ignore
      const token: string = thunkAPI.getState().auth.user.token;
      return await postsService.deletePost(id, token);
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
      })
      .addCase(getMyPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMyPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.myPosts = action.payload;
      })
      .addCase(getMyPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      })
      .addCase(deletePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.myPosts = state.myPosts.filter(
          (post) => post._id !== action.payload.id
        );
        state.posts = state.posts.filter(
          (post) => post._id !== action.payload.id
        );
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      });
    // .addCase(editPost.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(editPost.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.isSuccess = true;
    //   state.myPosts = state.myPosts.map((post) =>
    //     post._id === action.payload._id ? action.payload : post
    //   );
    //   state.posts = state.posts.map((post) =>
    //     post._id === action.payload._id ? action.payload : post
    //   );
    // })
    // .addCase(editPost.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.isError = true;
    //   state.message = action.payload as string;
    // })
  },
});

export const { reset } = postsSlice.actions;
export default postsSlice.reducer;
