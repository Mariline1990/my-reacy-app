import fantasy from "../assets2/fantasy.json";
import SingleBook from "./SingleBook";

const AllTheBooks = () => {
  return (
    <div>
      {fantasy.map((figurina, index) => (
        <SingleBook imma={figurina.img} title={figurina.title} key={index} />
      ))}
    </div>
  );
};

export default AllTheBooks;
