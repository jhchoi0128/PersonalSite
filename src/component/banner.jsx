import React, { Component } from "react";

class Banner extends Component {
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  render() {
    return (
      <div className="banner">
        <div className="banner-text">
          <h1>
            Be Human
            <br />
            coding
          </h1>
        </div>
        <div className="banner-button">
          <a
            href="#"
            className="btn btn-primary btn-lg active"
            role="button"
            aria-pressed="true"
          >
            Hire Me Now
          </a>
          <a
            href="#"
            className="fa fa-list btn-secondary btn-lg active ml-3"
            role="button"
            aria-pressed="true"
          >
            Watch Video
          </a>
        </div>
      </div>
    );
  }
}

export default Banner;
