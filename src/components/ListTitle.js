import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const ListTitle = props => {
  const { tortillasList, toppingList} = props;
  const foodMap = [...tortillasList, ...toppingList]
  let totalMoney = 0;
  foodMap.map(item => {
    if(item.added) totalMoney += item.price
  })

  return (
    <div className="topping-list-title">
      Price: {Math.round(totalMoney*100)/100}
    </div>
  );
};

const mapStateToProps = ({ toppings }) => {
  const { toppingList,  tortillasList } = toppings
  return {
    toppingList,
    tortillasList
  };
};

ListTitle.propTypes = {
  toppingList: PropTypes.array,
  tortillasList: PropTypes.array
};

export default connect(
  mapStateToProps,
  undefined
)(ListTitle);
