import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-sm navbar-light nav-custom">
          <a className="navbar-brand" href="#">
            <img className="site-logo" src="lukelion.jpg" alt="" />
          </a>
          <button
            className="navbar-toggler"
            id="btn-navbar"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse justify-content-center navbar-collapse"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav ">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
