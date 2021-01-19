import { ListItemSecondaryAction } from "@material-ui/core";
import React from "react";
const style = {
  div: {
    border: "4px double rgba(0, 0, 0, 0.32)",
    borderRadius: "5px",
    margin: "15px",
    boxShadow: "2px 2px 7px 0px rgba(0, 0, 0, 0.72)",
  },
  text: {
    margin: "5px",
  },
};

const ResultCard = (props) => (
  <div
    className="result-Card"
    id="result-card"
    style={style.div}
    key={props.data._id}
  >
    <div className="itemName">
      <h1>{props.data.name}</h1>
    </div>
    <div className="text" style={style.text}>
      {props.data.text.map((text, i) => {
        return <p key={i}>{text}</p>;
      })}
    </div>
  </div>
);
export default ResultCard;
