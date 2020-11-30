import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Col } from "../Grid";
import "./Nav.css";

const Nav = (props) => {
  let greeting;
  let loginStatus;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <Col size="md-6 sm-6">
        <Link to="/" className="navbar-brand">
          Game Test
        </Link>
      </Col>
      <Col size="md-6 sm-6"></Col>
    </nav>
  );
};

export default Nav;
