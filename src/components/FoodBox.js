import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const FoodBox = props => {
  const { tortillasList, toppingList} = props;
  const foodMap = [...tortillasList, ...toppingList]
  
  return (
    <div className="food-box-body">
      {foodMap && foodMap.map((item, index) => {
        const { imgUrl, added, name } = item
        return (
          added && <img key={index} className="food-box-image" src={imgUrl} height="400" width="399"/>
        )
      })}
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

FoodBox.propTypes = {
  toppingList: PropTypes.array,
  tortillasList: PropTypes.array
};

export default connect(
  mapStateToProps,
  undefined
)(FoodBox);
