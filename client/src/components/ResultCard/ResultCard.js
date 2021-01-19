import { ListItemSecondaryAction, StepLabel } from "@material-ui/core";
import React from "react";

const style = {
  div: {
    border: "4px double rgba(0, 0, 0, 0.32)",
    borderRadius: "5px",
    margin: "15px",
    boxShadow: "2px 2px 7px 0px rgba(0, 0, 0, 0.72)",
  },
  itemName: {
    marginLeft: "10px",
  },
  text: {
    marginLeft: "10px",
  },
  hr: {
    border: "0",
    height: "1px",
    backgroundImage:
      "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))",
  },
  detail: {
    fontStyle: "italic",
    marginLeft: "10px",
    fontSize: "smaller",
  },
  damage: {
    marginLeft: "10px",
  },
};

const ResultCard = (props) => {
  const { name, detail, _id, text, dmg1, dmg2, dmgType, range } = props.data;
  let damage;
  let damage2;
  let damageType;
  let weaponRange;
  //Damage Type
  if (dmgType === "S") {
    damageType = "Slashing";
  } else if (dmgType === "P") damageType = "Piercing";
  else if (dmgType === "B") {
    damageType = "Bludgeoning";
  }
  //Damage Amount
  if (dmg1 && dmg2) {
    damage = (
      <p>
        {"Damage: " +
          dmg1 +
          " " +
          damageType +
          " One handed, or " +
          dmg2 +
          " " +
          damageType +
          " Two Handed"}
      </p>
    );
  } else if (dmg1) {
    damage = <p>{"Damage: " + dmg1 + " " + damageType}</p>;
  } else {
    damage = "";
  }
  //weapon range
  if (range) {
    weaponRange = "Range: " + range + " feet";
  } else if (dmg1) {
    weaponRange = "Range: 5ft";
  }

  return (
    <div>
      <div className="result-Card" id="result-card" style={style.div} key={_id}>
        <div className="itemName" style={style.itemName}>
          <h1>{name}</h1>
        </div>
        <div className="detail" style={style.detail}>
          <p>{detail}</p>
        </div>
        <hr className="hr" style={style.hr} />
        <div style={style.damage}>{damage}</div>
        <div style={style.damage}>{weaponRange}</div>
        <hr className="hr" style={style.hr} />

        <div className="text" style={style.text}>
          {text.map((text, i) => {
            return <h5 key={i}>{text}</h5>;
          })}
        </div>
      </div>
    </div>
  );
};
export default ResultCard;
