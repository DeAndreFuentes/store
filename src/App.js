import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";
import Catalog from "./components/catalog";
import Todo from "./components/ToDo/index";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Catalog></Catalog>

      <Todo></Todo>

      <Footer></Footer>
    </div>
  );
}

export default App;
