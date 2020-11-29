import React, { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import SearchBar from "../SearchBar";

export default function MyTabs(props) {
  const [activeTab, setActiveTab] = useState("1");
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
          <SearchBar />
        </TabPane>
        <TabPane tabId="2">Tab 2 Content</TabPane>
      </TabContent>
    </div>
  );
}
