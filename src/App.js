import Navbar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Product from "./components/product/index";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>

      <Footer></Footer>
    </div>
  );
}

export default App;
