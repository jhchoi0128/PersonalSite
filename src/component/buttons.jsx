import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { Link, animateScroll as scroll } from "react-scroll";
const element = <FontAwesomeIcon icon={faPlayCircle} size="2x" fixedWidth />;

const Buttons = () => {
  return (
    <div className="banner-button">
      <a
        href="#"
        className="btn btn-primary btn-lg active"
        id="btn-custom"
        role="button"
        aria-pressed="true"
      >
        Hire Me Now
      </a>

      <a
        href="#video"
        className="btn btn-secondary btn-lg active ml-3 smoothscroll"
        id="btn2-custom"
        role="button"
        aria-pressed="true"
      >
        <Link
          activeClass="active"
          to="video"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <span className="center">
            {element}
            Watch Video
          </span>
        </Link>
      </a>
    </div>
  );
};

export default Buttons;
