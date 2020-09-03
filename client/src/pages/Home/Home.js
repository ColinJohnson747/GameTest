import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Card } from "../../components/Card";
import { Input, TextArea, FormBtn } from "../../components/Form";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";

function Home() {
  // Setting our component's initial state
  const [books, setBooks] = useState([]);
  const [formObject, setFormObject] = useState({});
  const formEl = useRef(null);

  // Load all books and store them with setBooks
  useEffect(() => {}, []);

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-4">
          <Card>
            <h1>Search</h1>
            <h3>items</h3>
            <h3>classes</h3>
            <h3>Spells</h3>
          </Card>
        </Col>
        <Col size="md-4">
          <Card>
            <h1>Create</h1>
            <h3>items</h3>
            <h3>classes</h3>
            <h3>Spells</h3>
            <h3>Character</h3>
          </Card>
        </Col>
        <Col size="md-4">
          <Card>
            <h1>View</h1>
            <h3>My Characters</h3>
            <h3>My Spells</h3>
            <h3>My items</h3>
            <h3>My Classes</h3>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
