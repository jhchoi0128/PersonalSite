import React, { Component } from "react";
import Navbar from "./navbar";
import Banner from "./banner";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <Navbar />
          <Banner />
        </div>
      </header>
    );
  }
}

export default Header;
