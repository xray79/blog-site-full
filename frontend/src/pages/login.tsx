import Navbar from "../components/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Spinner } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { loginUser, registerUser, reset } from "../features/auth/authSlice";
import Footer from "../components/Footer";
import { useNavigate } from "react-router";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // destructure required vars
  const { email, password } = loginData;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { user, isLoading, isError, isSuccess, message } = useAppSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      console.error("Something went wrong...");
    }

    if (isSuccess || user) {
      // redirect to posts if successful
      navigate("/posts");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, dispatch]); //router

  // allow rewrite form data
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // form submission handler
  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    // submit data
    dispatch(loginUser(loginData));

    // reset form data
    setLoginData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="">
      <Navbar />

      <Container className="vh-100">
        <h2 className="mt-4 mb-4 display-6 text-primary">
          Please enter your login details
        </h2>
        <Form onSubmit={submitHandler} className="">
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={changeHandler}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={changeHandler}
            />
          </Form.Group>

          {isError ? (
            <p className="text-danger text-center">
              Incorrect username or password
            </p>
          ) : (
            ""
          )}

          <Button className="" variant="primary" type="submit">
            {isLoading ? <Spinner animation="border" /> : "Login"}
          </Button>
        </Form>
      </Container>

      <Footer />
    </div>
  );
};
export default Login;
