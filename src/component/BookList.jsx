import fantasy from "../assets2/fantasy.json";
import SingleBook from "./SingleBook";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

const AllTheBooks = () => {
  return (
    <div>
      {fantasy.map((figurina, index) => (
        <div> {this.props.book.titlebook} </div>
      ))}
    </div>
  );
};

export default AllTheBooks;
