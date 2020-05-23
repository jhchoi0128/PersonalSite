import React, { Component } from "react";
import Buttons from "./buttons";

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <h1>
          Be human
          <br />
          Coding
        </h1>
        <Buttons />
      </div> /*Banner */
    );
  }
}

export default Banner;
