import React, { useState, useEffect } from "react";
import { Container, Row } from "../../components/Grid";
import API from "../../utils/API";
import Col from "react-bootstrap/Col";
import ResultCard from "../../components/ResultCard";
import SearchBar from "../../components/SearchBar";

function Search() {
  const [items, SetItems] = useState();

  useEffect(() => {
    API.getAllItems().then((res) => {
      SetItems(res.data);
    });
  }, []);

  function handleFormSubmit(event) {
    event.preventDefault();
    const search = event.target.value;
    API.getSearchedItems(search).then((res) => {
      SetItems(res.data);
    });
  }
  let itemsToRender;
  if (items) {
    itemsToRender = items.map((items) => {
      console.log(items.text);
      return <ResultCard key={items._id} data={items}></ResultCard>;
    });
  }

  return (
    <main>
      <Container fluid>
        <Row>
          <SearchBar handleFormSubmit={handleFormSubmit}></SearchBar>
        </Row>
        <Row>{itemsToRender}</Row>
      </Container>
    </main>
  );
}

export default Search;
