import fantasy from "../assets2/fantasy.json";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { Component } from "react";

class SingleBook extends Component {
  state = {
    book: {
      titlebook: "",
      imagebook: "",
    },
  };

  render() {
    return (
      <Container>
        <Row>
          <Col className="d-flex aling-items-auto">
            <Card style={{ width: "18rem", marginBottom: "30px", marginTop: "50px" }}>
              <Card.Img variant="top" src={this.state.book} />
              <Card.Body>
                <Card.Title>{this.state.book}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          ;
        </Row>
      </Container>
    );
  }
}

export default SingleBook;
