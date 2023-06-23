/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
// import {Link} from 'react-router-dom'
import PropTypes from "prop-types";
import "./index.css";

const Navbar = (props) => {
  const colors = ['#e169c3', '#b569e1', '#7169e1', '#69b8e1'];
  const [isActive, setIsActive] = useState("inline");

  const chooseMode = () => {
    if(props.backgroundColor)
    {
    setStyles({
      position: "relative",
      right: "25px",
    });
    setIsActive('inline');
    setStyles1({
      display: "none",
    });
    }
  };

  const [styles, setStyles] = useState({
    position: "relative",
    right: "25px",
    display: "none",
  });
  const [styles1, setStyles1] = useState({});

  const colorMode = (value) => {
    // console.log(value + " clicked");
    props.colorMode(value);
    setStyles1({
      display: "inline",
    });
    setIsActive('none');

  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.color} bg-${props.mode} nav-shadow`}>
      <div className="container-fluid">
        <a className="navbar-brand title"  href="#">
          <span style={{hover: 'orange'}}>
          {props.title}
            </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href='#'>
                {props.home}
              </a>
            </li>
            <li>
              <a className="nav-link active" aria-current="page" href="#">
                {props.about}
              </a>
              </li>
          </ul>
          <button className="btn btn-primary choose_color" onClick={chooseMode} style={styles1}>
            Choose backgroundColor
          </button>
          <div className="colors" style={styles}>
            {colors.map((value, index) => {
              return (
                <button
                className={`my-button ${isActive ? "active" : ""}`}
                  key={index}
                  style={{
                    color:'black',
                    backgroundColor: `${value}`,
                    height: "30px",
                    width: "30px",
                    margin: "5px",
                    borderRadius: "50px",
                    border: "none",
                    display:`${isActive}`
                  }}
                  onClick={() => colorMode(value)}
                ></button>
              );
            })}
          </div>
          <div className={`form-check form-switch text-${props.colors}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.fun}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              {props.text}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string,
};

Navbar.defaultProps = {
  title: "VENKY",
  home: "HOME",
};

export default Navbar;
