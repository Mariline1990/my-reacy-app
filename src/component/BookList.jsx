import { Container, Row } from "react-bootstrap";
import fantasy from "../assets2/fantasy.json";
import SingleBook from "./SingleBook";

const AllTheBooks = () => {
  return (
    <Container>
      <Row>
        {fantasy.map((figurina, index) => (
          <SingleBook imma={figurina.img} title={figurina.title} key={index} />
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
