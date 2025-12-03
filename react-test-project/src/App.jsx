import React, { Component } from "react";
import Navbar from "./components/navbar";
import Product from "./components/product";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="product-container">
          <Product title="Tomaten" description="Text über Tomaten"/> <Product title="Gurken" description="Text über Gurken"/> <Product title="Karotten" description="Text über Karotten"/> <Product title="Paprika" description="Text über Paprika" />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
