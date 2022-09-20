import { Container, Spinner } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import PostForm from "../components/PostForm";
import { getMyPosts, reset } from "../features/posts/postsSlice";
import PostItem from "../components/PostItem";
import Footer from "../components/Footer";
import { useNavigate } from "react-router";
import EditModal from "../components/EditModal";

const MyPosts = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { myPosts, isLoading, isError, message } = useAppSelector(
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

    dispatch(getMyPosts());

    return () => {
      dispatch(reset());
    };
  }, [user, isError, message, dispatch, navigate]);

  return (
    <div>
      <Navbar />

      <Container className="">
        <h1 className="display-6 mt-4 text-success">{user?.name}'s posts</h1>
        <h3 className="display-7 text-success mb-4">
          Your posts are here, create a new one below
        </h3>

        <PostForm />
      </Container>

      <Container className="mt-5 mb-5">
        {isLoading ? (
          <Spinner animation="border" />
        ) : (
          <div>
            {myPosts.map((post, i) => (
              <PostItem key={i} post={post} user={user} />
            ))}
          </div>
        )}
      </Container>

      <Footer />
    </div>
  );
};
export default MyPosts;
