import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./component/Footer";
import BookList from "./component/BookList";
import MyNav from "./component/MyNav";
function App() {
  return (
    <div className="App">
      <MyNav brand="Mybooks" home="Home" link="About" />
      <BookList title="Titolo film" />
      <Footer paragraph="Torna su " />
    </div>
  );
}

export default App;
