import { Container, Spinner } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import PostForm from "../components/PostForm";
import { getPosts, reset } from "../features/posts/postsSlice";
import PostItem from "../components/PostItem";
import Footer from "../components/Footer";
import { useNavigate } from "react-router";

const Posts = () => {
  // const Router = useRouter();
  const { user } = useAppSelector((state) => state.auth);
  const { posts, isLoading, isError, isSuccess, message } = useAppSelector(
    (state) => state.posts
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      console.error(message);
    }
    if (!user) {
      navigate("/login");
      return;
    }

    dispatch(getPosts());

    return () => {
      dispatch(reset());
    };
  }, [user, isError, message, dispatch, navigate]); // Router

  return (
    <div>
      <Navbar />

      <Container className="">
        <h1 className="display-6 text-primary mt-4">Blog posts</h1>
        <h3 className="display-7 text-primary mt-4 mb-3">
          Welcome <span className="text-danger">{user && user.name}</span>
        </h3>
        <h3 className="display-7 text-primary mb-4">
          Enter your new post here
        </h3>

        <PostForm />
      </Container>

      <Container className="mt-5 mb-5">
        {isLoading ? (
          <Spinner animation="border" />
        ) : (
          <div>
            {posts.map((post, i) => (
              <PostItem key={i} post={post} />
            ))}
          </div>
        )}
      </Container>
      <Footer />
    </div>
  );
};
export default Posts;
