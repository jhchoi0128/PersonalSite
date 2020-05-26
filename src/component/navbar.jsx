import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light nav-custom fixed-top">
      <a className="navbar-brand" href="#foo">
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
        <i className="fa fa-bars fa-lg" aria-hidden="false"></i>
      </button>
      <div
        className="collapse justify-content-center navbar-collapse"
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#foo" onClick={scroll.scrollToTop}>
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <Link
            activeClass="active"
            to="profile"
            spy={true}
            smooth={true}
            // offset={0}
            duration={500}
          >
            <li className="nav-item nav-link" style={{ cursor: "pointer" }}>
              Shop
            </li>
          </Link>
          <Link
            activeClass="active"
            to="profile"
            spy={true}
            smooth={true}
            duration={500}
          >
            <li className="nav-item nav-link ">About</li>
          </Link>
          <Link
            activeClass="active"
            to="profile"
            spy={true}
            smooth={true}
            duration={500}
          >
            <li className="nav-item nav-link">Resume</li>
          </Link>
          <Link
            activeClass="active"
            to="profile"
            spy={true}
            smooth={true}
            duration={500}
          >
            <li className="nav-item nav-link">Contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
