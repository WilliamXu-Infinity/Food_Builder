import * as Types from "../actions/actionTypes";

const initialState = {
  toppingList: [
    {
      name: "Italian Sausage",
      listImg: "//www.pizzahut.com/assets/w/evo_pb/sidebar/icon_topping_ItalianSausage.png",
      imgUrl: "//www.pizzahut.com/assets/w/evo_pb/topping/topping_ItalianSausage_ML_reg.png",
      added: false,
      price: 0.78
    },
    {
      name: "Mushrooms",
      listImg: "//www.pizzahut.com/assets/w/evo_pb/sidebar/icon_topping_Mushroom.png",
      imgUrl: "//www.pizzahut.com/assets/w/evo_pb/topping/topping_Mushroom_ML_reg.png",
      added: false,
      price: 0.78
    },
    {
      name: "Meatball",
      listImg: "//www.pizzahut.com/assets/w/evo_pb/sidebar/icon_topping_Meatball.png",
      imgUrl: "//www.pizzahut.com/assets/w/evo_pb/topping/topping_Meatball_ML_reg.png",
      added: false,
      price: 0.78
    },
    {
      name: "Ham",
      listImg: "//www.pizzahut.com/assets/w/evo_pb/sidebar/icon_topping_Ham.png",
      imgUrl: "//www.pizzahut.com/assets/w/evo_pb/topping/topping_Ham_ML_reg.png",
      added: false,
      price: 0.78
    },
    {
      name: "Bacon",
      listImg: "//www.pizzahut.com/assets/w/evo_pb/sidebar/icon_topping_Bacon.png",
      imgUrl: "//www.pizzahut.com/assets/w/evo_pb/topping/topping_Bacon_ML_reg.png",
      added: false,
      price: 0.78
    },
    {
      name: "Grilled Chicken",
      listImg: "//www.pizzahut.com/assets/w/evo_pb/sidebar/icon_topping_Chicken.png",
      imgUrl: "//www.pizzahut.com/assets/w/evo_pb/topping/topping_Chicken_ML_reg.png",
      added: false,
      price: 0.78
    },
    {
      name: "Green Bell Peppers",
      listImg: "//www.pizzahut.com/assets/w/evo_pb/sidebar/icon_topping_GreenBellPepper.png",
      imgUrl: "//www.pizzahut.com/assets/w/evo_pb/topping/topping_GreenBellPepper_ML_reg.png",
      added: false,
      price: 0.78
    },
    {
      name: "Tomatoes",
      listImg: "//www.pizzahut.com/assets/w/evo_pb/sidebar/icon_topping_Tomato.png",
      imgUrl: "//www.pizzahut.com/assets/w/evo_pb/topping/topping_Tomato_ML_reg.png",
      added: false,
      price: 0.78
    }
  ],
  tortillasList: [
    {
      name: "default toritiall",
      imgUrl: "https://images-na.ssl-images-amazon.com/images/I/71IeSB79qYL._SL1200_.jpg",
      added: true,
      price: 3.99
    }
  ]
};

const login = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.CHANGE_TOPPING:
      console.log("triggered, CHANGE_TOPPING")
      return { ...state, toppingList: [ 
        ...state.toppingList.slice(0, payload), 
        {...state.toppingList[payload], added: !state.toppingList[payload].added}, 
        ...state.toppingList.slice(payload+1)
      ]}

    case Types.CHANGE_TORTILLA: 
      console.log("triggered, CHANGE_TORTILLA")
      return { ...state, tortillasList: [ 
        ...state.tortillasList.slice(0, payload), 
        {...state.tortillasList[payload], added: !state.tortillasList[payload].added}, 
        ...state.tortillasList.slice(payload+1) 
      ]}


    default:
      return state;
  }
};

export default login;
