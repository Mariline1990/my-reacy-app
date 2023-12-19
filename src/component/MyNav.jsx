import { Container, Nav, Navbar } from "react-bootstrap";

const MyNav = ({ home, link, brand }) => (
  <Navbar expand="lg" className="bg-info">
    <Container>
      <Navbar.Brand href="#home">{brand}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">{home}</Nav.Link>
          <Nav.Link href="#link">{link}</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNav;
