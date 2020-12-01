import React from "react";

const ResultCard = (props) => (
  <div className="resultCard">
    <div className="itemName">{props.data.name}</div>
  </div>
);
export default ResultCard;
