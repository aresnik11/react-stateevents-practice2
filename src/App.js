import React, { Component } from "react";
import "./App.css";
import BeyContainer from './BeyContainer'
import Favorites from './Favorites'

class App extends React.Component {
  //storing beys in state because they can change
  state = {
    beys: [],
  }

  //using componentDidMount so fetch occurs immediately after first render
  componentDidMount() {
    fetch("http://localhost:4000/beys")
    .then(resp => resp.json())
    //setting state in componentDidMount so that a rerender is triggered
    .then(data => this.setState({
      //storing all of the fetched beys in beys array of state
      beys: data,
    }))
  }

  //handles clicks on the bey container, id will come from child components that get passed this via props
  handleBeyClick = (id) => {
    //make a copy of our beys array in state - don't want to update state directly
    let newBeys = [...this.state.beys]
    //find the bey that matches our id
    let myBey = newBeys.find(bey => bey.id === id)
    //if the bey is not a favorite, make it a favorite
    //if it is already a favorite, don't want to do anything
    if (!myBey.favorite) {
      myBey.favorite = true
    }
    //update state to have our updated copy of beys
    this.setState({
      beys: newBeys,
    })
  }

  handleFavoriteClick = (id) => {
    //make a copy of our beys array in state - don't want to update state directly
    let newBeys = [...this.state.beys]
    //find the bey that matches our id
    let myBey = newBeys.find(bey => bey.id === id)
    //if the bey is a favorite (it should be), make it not a favorite
    if (myBey.favorite) {
      myBey.favorite = false
    }
    //update state to have our updated copy of beys
    this.setState({
      beys: newBeys,
    })
  }

  render() {
    //filter beys stored in state to find only the favorites
    let favorites = this.state.beys.filter(bey => bey.favorite)
    return (
      <div className="container">
        {/* passing beys in a prop to BeyContainer component, and passing function to handle clicks on the bey container */}
        <BeyContainer beys={this.state.beys} clickHandler={this.handleBeyClick}/>
        {/* passing favorites in a prop to Favorites component, and passing function to handle clicks on the favorites container */}
        <Favorites favorites={favorites} clickHandler={this.handleFavoriteClick}/>
      </div>
    );
  }
};

export default App;
