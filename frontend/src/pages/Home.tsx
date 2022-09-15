import { Container, Button, Row, Col, Card, Accordion } from "react-bootstrap";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <section className={`${styles.mainPage} bg-light h-100`}>
        <Navbar />
        <div className={styles.wave}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className={styles.shapeFill}
            ></path>
          </svg>
        </div>

        <Container className="d-md-flex justify-content-between pb-5">
          <div className="w-50">
            <h1 className="display-1 text-primary mt-5">Blog.io</h1>
            <h2 className="text-secondary mb-5">Record your thoughts</h2>
            <p className="mb-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              commodi aliquid laboriosam maiores, nostrum molestiae perspiciatis
              placeat fugiat perferendis a accusantium! Facilis deserunt commodi
              quis voluptas nisi quod recusandae quisquam atque delectus
              consequuntur, laborum consequatur autem magni sint voluptatum
              ratione modi ut, quia beatae unde corrupti esse distinctio! Ea,
              ut?
            </p>
            <Button className="me-4" href="/login" size="lg">
              Login
            </Button>
            <Button variant="danger" href="/register" size="lg">
              Sign up
            </Button>
          </div>
          <img
            className="w-50 img-fluid"
            src={"/undraw_dreamer_re_9tua.svg"}
            width={"500px"}
            height={"500px"}
          />
        </Container>
      </section>

      <section className="bg-dark bg-gradient">
        <div className={`${styles.wave}`}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className={styles.waveFillLight}
            ></path>
          </svg>
        </div>

        <Container className="pb-5">
          <Row className="my-5 text-center">
            <Col>
              <Card
                className={`${styles.card} ${styles.card1} bg-dark text-white py-4`}
              >
                <Card.Title>Latest post</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Obcaecati laborum temporibus autem ullam ducimus deserunt.
                  Saepe beatae sapiente architecto?
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card>
            </Col>
            <Col>
              <Card
                className={`${styles.card} ${styles.card2} bg-dark text-white py-4`}
              >
                <Card.Title>Middle post</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi voluptatum cum, quia repellendus est culpa temporibus
                  eveniet explicabo iste sunt.
                </Card.Text>
                <Card.Text>Last updated 10 mins ago</Card.Text>
              </Card>
            </Col>
            <Col>
              <Card
                className={`${styles.card} ${styles.card3} bg-dark text-white py-4`}
              >
                <Card.Title>Old post</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  a sequi obcaecati culpa voluptatibus unde recusandae ipsum
                  eaque ratione amet.
                </Card.Text>
                <Card.Text>Last updated 2 hours ago</Card.Text>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bg-light h-100 pb-5">
        <div className={styles.wave}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className={styles.shapeFill}
            ></path>
          </svg>
        </div>
        <Container>
          <h2 className="display-4 text-primary mt-5">How does it work?</h2>
          <p className="text-secondary mb-5 w-50">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
            cupiditate architecto placeat sapiente explicabo. Fugiat rerum amet
            facere magnam quos?
          </p>
          <Accordion className="mb-5">
            <Accordion.Item eventKey="0">
              <Accordion.Header>How does it work?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Is my information secure?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                How can I share information securely?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>How can I sign up?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                What other services are available?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>

      <section className="bg-dark bg-gradient pb-5">
        <div className={styles.wave}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className={styles.waveFillLight}
            ></path>
          </svg>
        </div>
        <Container className="d-flex justify-content-between">
          <div className="w-50">
            <img
              className=""
              src={"/diary.svg"}
              width={"500px"}
              height={"500px"}
            />
          </div>
          <div className="w-50 my-auto">
            <h2 className="text-primary">Privacy Guaranteed</h2>
            <p className="text-light">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, dolorem, ipsam omnis libero assumenda iste quae
              doloremque deleniti ex placeat nam aliquid aspernatur minima rerum
              debitis magni similique et, odio delectus quo. Eos vel ad eaque,
              ullam laudantium vitae obcaecati reiciendis assumenda officiis
              necessitatibus saepe sed. Nostrum numquam voluptatem quo.
            </p>
            <Button variant="outline-light">Read More</Button>
          </div>
        </Container>
      </section>

      <section className="bg-light pb-5">
        <div className={styles.wave}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className={styles.shapeFill}
            ></path>
          </svg>
        </div>

        <Container className="d-flex justify-content-between mx-auto pb-5">
          <div className="w-50 my-auto me-5">
            <h2 className="text-primary">Safely share your stories</h2>
            <p className="text-dark">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              neque ex omnis modi, dicta quas reprehenderit eius dignissimos
              culpa? Suscipit quasi natus maiores molestias officiis, aliquam
              fugit. Sunt est in harum ab laborum optio atque, assumenda amet
              nobis blanditiis asperiores totam facilis reprehenderit illum
              earum ex molestias officia delectus facere!
            </p>
            <Button variant="outline-dark">Read More</Button>
          </div>
          <div className="w-50">
            <img
              className=""
              src={"/article.svg"}
              width={"500px"}
              height={"500px"}
            />
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
