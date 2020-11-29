import React, { useState, useEffect } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import SearchBar from "../SearchBar";

import API from "../../utils/API";

function MyTabs(props) {
  const [items, setItems] = useState("");
  const [activeTab, setActiveTab] = useState("1");

  useEffect(() => {
    let mounted = true;
    API.getAllItems().then((res) => {
      if (mounted) {
        setItems(res.data);
      }
    });
    return function cleanup() {
      mounted = false;
    };
  }, []);
  function handleFormSubmit(event) {
    event.preventDefault();
    const search = event.target.value;
    API.getSearchedItems(search).then((res) => {
      setItems(res.data);
    });
  }

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={activeTab == "1" ? "active" : ""}
            onClick={() => setActiveTab("1")}
          >
            Items
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <SearchBar handleFormSubmit={handleFormSubmit} />
        </TabPane>
        <TabPane tabId="2">Tab 2 Content</TabPane>
      </TabContent>
    </div>
  );
}

export default MyTabs;
