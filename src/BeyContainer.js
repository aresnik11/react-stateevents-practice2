import React from "react";
import BeyCard from './BeyCard'

const BeyContainer = (props) => {
  //creates BeyCard components for each bey in the array passed down from props
  //pass down the clickHandler function reference again
  let beys = props.beys.map(bey => <BeyCard key={bey.id} bey={bey} clickHandler={props.clickHandler} />)
  return (
    <div className="index">
      <h1>Index</h1>
      {beys}
    </div>
  )
}

export default BeyContainer;
