import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Col } from "../Grid";
import "./Nav.css";

const Nav = (props) => {
  let greeting;
  let loginStatus;

  if (props.user === null) {
    greeting = <p>Welcome guest</p>;
  } else if (props.user.firstName) {
    greeting = (
      <Fragment>
        Welcome back, <strong>{props.user.firstName}</strong>
      </Fragment>
    );
  } else if (props.user.username) {
    greeting = (
      <Fragment>
        Welcome back, <strong>{props.user.username} </strong>
      </Fragment>
    );
  }
  if (props.user === null) {
    loginStatus = (
      <Link to="login" className="login">
        Login/Signup
      </Link>
    );
  } else {
    loginStatus = (
      <Link to="#" className="logout" onClick={props.logout}>
        Logout
      </Link>
    );
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <Col size="md-6 sm-6">
        <Link to="/" className="navbar-brand">
          Game Test
        </Link>
      </Col>
      <Col size="md-6 sm-6">
        <div className="float-right">
          {greeting} {loginStatus}
        </div>
      </Col>
    </nav>
  );
};

export default Nav;
