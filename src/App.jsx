import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./component/Footer";
import AllTheBooks from "./component/AllTheBooks";
import MyNav from "./component/MyNav";
import SingleBook from "./component/SingleBook";

function App() {
  return (
    <div className="App">
      <MyNav brand="Mybooks" home="Home" link="About" />
      <AllTheBooks title="Titolo film" />
      <Footer paragraph="Torna su " />
    </div>
  );
}

export default App;
