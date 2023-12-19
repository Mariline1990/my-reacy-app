import { Container, Row, Col } from "react-bootstrap";

const Footer = ({ paragraph }) => (
  <Container className="fluid bg-info">
    <Row>
      <Col>
        <p>{paragraph}</p>
      </Col>
    </Row>
  </Container>
);

export default Footer;
