import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Card } from "../../components/Card";
import { Input, TextArea, FormBtn } from "../../components/Form";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import SearchBar from "../../components/SearchBar";

function Search() {
  const [formObject, setFormObject] = useState({});
  const formEl = useRef(null);
  const [items, setItems] = useState([]);

  /* For Getting and applying all Items */
  useEffect(() => {
    let mounted = true;
    API.getItems().then((res) => {
      if (mounted) {
        setItems(res.data);
      }
    });
    return function cleanup() {
      mounted = false;
    };
  }, []);

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-8">
          <h1>Search Page</h1>
          <SearchBar />
        </Col>
      </Row>
    </Container>
  );
}

export default Search;
