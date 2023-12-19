import fantasy from "../assets2/fantasy.json";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

const AllTheBooks = () => {
  return (
    <Container>
      <Row>
        {fantasy.map((figurina, index) => (
          <Col key={index} className="d-flex aling-items-auto">
            <Card style={{ width: "18rem", marginBottom: "30px", marginTop: "50px" }}>
              <Card.Img variant="top" src={figurina.img} />
              <Card.Body>
                <Card.Title>{figurina.title}</Card.Title>
                <Button className="bg-success">{figurina.category}</Button>
              </Card.Body>

              <Card.Body>
                <Button>Acquista</Button>
              </Card.Body>
              <strong>{figurina.price}$</strong>
            </Card>
          </Col>
        ))}
        ;
      </Row>
    </Container>
  );
};

export default AllTheBooks;
