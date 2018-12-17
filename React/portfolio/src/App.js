import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from './components/MenuComponent';

class App extends Component {
  render() {
    return (
      <div className="">
        <Navbar dark color="dark">
          <NavbarBrand href="">Hello</NavbarBrand>
        </Navbar>
        <Menu />
      </div>
    );
  }
}

export default App;
