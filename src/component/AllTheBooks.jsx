import fantasy from "../assets2/fantasy.json";
import { Card, Container, ListGroup, Row, Col } from "react-bootstrap";

const AllTheBooks = () => {
  return (
    <Container>
      <Row>
        {fantasy.map((figurina, index) => (
          <Col key={index} className="d-flex aling-items-stretch">
            <Card style={{ width: "18rem", marginBottom: "30px", marginTop: "50px" }}>
              <Card.Img variant="top" src={figurina.img} />
              <Card.Body>
                <Card.Title>{figurina.title}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
        ;
      </Row>
    </Container>
  );
};

export default AllTheBooks;
