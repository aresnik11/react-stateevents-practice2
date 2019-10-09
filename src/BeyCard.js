import React from "react";

const BeyCard = (props) => {
  return (
    <div>
      <h3>{props.bey.name}</h3>
      {/* if we have a clickHandler prop, create an anonymous function that passes a reference to the function from our props with the bey id as an argument */}
      {/* if we don't, don't do any of that */}
      <img alt="" src={props.bey.img} onClick={props.clickHandler ? () => props.clickHandler(props.bey.id) : null}/>
    </div>
  );
};

export default BeyCard;
