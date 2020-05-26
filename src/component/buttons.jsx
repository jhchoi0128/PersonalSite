import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
const element = <FontAwesomeIcon icon={faPlayCircle} size="2x" fixedWidth />;
// const link = (
//   <Link
//     activeClass="active"
//     spy={true}
//     smooth={true}
//     offset={-70}
//     duration={500}
//   />
// );
const Buttons = () => {
  return (
    <div className="banner-button">
      <a
        href="#foo"
        className="btn btn-primary btn-lg m-1 active"
        id="btn-custom"
        role="button"
        aria-pressed="true"
      >
        Hire Me Now
      </a>
      <Link
        activeClass="active"
        to="video"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <p
          className="btn btn-secondary btn-lg active "
          id="btn2-custom"
          role="button"
          aria-pressed="true"
        >
          <span className="center">
            {element}
            Watch Video
          </span>
        </p>
      </Link>
    </div>
  );
};

export default Buttons;
