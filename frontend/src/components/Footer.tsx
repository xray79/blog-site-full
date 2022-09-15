import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { MdEmail, MdCopyright } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="footer bg-dark border-top text-muted">
      <Container className="py-5">
        <Row className="mb-3">
          <div className="d-flex">
            <p className="me-auto fw-bold">Join us on social media</p>
            <span className="d-flex">
              <FaFacebookF className="me-3" />
              <FaTwitter className="me-3" />
              <FaGoogle className="me-3" />
              <FaInstagram className="me-3" />
              <FaLinkedin className="me-3" />
              <FaGithub className="me-3" />
            </span>
          </div>
        </Row>
        <Row className="text-center fw-bold text-uppercase mb-3">
          <Col>Company name</Col>
          <Col>Products</Col>
          <Col>Useful links</Col>
          <Col>Contact</Col>
        </Row>
        <Row className="text-center mb-2">
          <Col>company desc.</Col>
          <Col>Blog</Col>
          <Col>Home</Col>
          <Col>
            <MdEmail /> test.example@gmail.com
          </Col>
        </Row>
        <Row className="text-center mb-2">
          <Col></Col>
          <Col>Shopping</Col>
          <Col>Posts</Col>
          <Col>
            <IoLocationSharp /> 123 Oxford St. London, UK
          </Col>
        </Row>
        <Row className="text-center mb-2">
          <Col></Col>
          <Col>Music</Col>
          <Col>Login</Col>
          <Col>
            <BsTelephoneFill /> +44123 456 7890{" "}
          </Col>
        </Row>
        <Row className="text-center mb-2">
          <Col></Col>
          <Col>Travel</Col>
          <Col>Register</Col>
          <Col></Col>
        </Row>
        <Row className="text-center fw-bold text-uppercase mt-5">
          <Col>
            <MdCopyright /> Copyright 2022
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Footer;
