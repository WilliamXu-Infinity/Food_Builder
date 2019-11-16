import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FoodBox from "./components/FoodBox";
import ToppingList from "./components/ToppingList";
import "./App.css"

class App extends Component {

  render() {
    return (
      <div className="builder-body">
        <FoodBox/>
        <ToppingList/>
      </div>
      
    );
  }
}

App.propTypes = {
  join: PropTypes.bool
};

export default App;