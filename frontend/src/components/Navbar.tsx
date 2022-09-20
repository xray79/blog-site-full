import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { logout, reset } from "../features/auth/authSlice";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
  };

  return (
    <div>
      <>
        <NavbarBs bg="dark" variant="dark">
          <Container>
            <NavbarBs.Brand href="/" className="me-auto">
              Blog
            </NavbarBs.Brand>
            <Nav>
              <Nav.Item className="me-3">
                <Nav.Link href="/posts">Posts</Nav.Link>
              </Nav.Item>
              {user ? (
                <>
                  <Nav.Item className="me-3">
                    <Nav.Link href="/myposts">My Posts</Nav.Link>
                  </Nav.Item>

                  <Nav.Item className="me-3">
                    <Button href="/posts" variant="primary">
                      Create +
                    </Button>
                  </Nav.Item>

                  <Nav.Item>
                    <Button variant="danger" onClick={onLogout}>
                      Logout
                    </Button>
                  </Nav.Item>
                </>
              ) : (
                <>
                  <Nav.Item className="me-3">
                    <Nav.Link href="/login">Login</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link href="/register">Register</Nav.Link>
                  </Nav.Item>
                </>
              )}
            </Nav>
          </Container>
        </NavbarBs>
      </>
    </div>
  );
};
export default Navbar;
