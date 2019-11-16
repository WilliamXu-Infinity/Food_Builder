import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeTopping } from "../actions/index"
import ListTitle from "./ListTitle"

const ToppingList = props => {
  const { toppingList, changeTopping } = props;
  
  return (
    <div className="topping-list-body">
      <ListTitle />
      <div className="topping-list">
        {toppingList && toppingList.map((item, index) => {
          const { name, listImg, added } = item
          return (
            <div key={index} className="topping-list-box">
              <img key={index} className="topping-list-img" src={listImg} height="50" width="50"/>
              <h4 className="topping-list-text">{name}</h4>
              <button className={`topping-item-${added ? "remove" : "add"}`}
              onClick={() => changeTopping(index)}
              >{added ? "remove" : "add"}</button>
            </div>
          )
        })}
      </div>
      
    </div>
  );
};

const mapStateToProps = ({ toppings }) => {
  const { toppingList } = toppings
  return {
    toppingList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeTopping: (payload) => dispatch(changeTopping(payload))
  };
};

ToppingList.propTypes = {
  toppingList: PropTypes.array,
  changeTopping: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToppingList);
