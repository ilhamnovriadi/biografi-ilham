import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

function Header(props) {
  return (
    <div className="container-nav">
      <h1>Portfolio</h1>
      <p
        onClick={() =>
          window
            .open(
              "https://www.linkedin.com/in/ilham-novriadi-82b900b6/",
              "_blank"
            )
            .focus()
        }
      >
        {props.name} - {props.as}
      </p>
    </div>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  as: PropTypes.string.isRequired,
};

export default Header;
