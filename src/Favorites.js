import React, { Component } from "react";
import BeyCard from "./BeyCard";

const Favorites = (props) => {
  let favorites = props.favorites.map(bey => <BeyCard key={bey.id} bey={bey} clickHandler={props.clickHandler} />)
  return (
    <div className="favorites">
      <h1>Favorites</h1>
      {favorites}
    </div>
  )
}

export default Favorites