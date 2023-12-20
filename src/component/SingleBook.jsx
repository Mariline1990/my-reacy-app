import { Card } from "react-bootstrap";
import { Component } from "react";

class SingleBook extends Component {
  render() {
    return (
      <Card style={{ width: "18rem", marginBottom: "30px", marginTop: "50px" }}>
        <Card.Img variant="top" src={this.props.imma} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
