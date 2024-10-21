import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./Authentication/Reducer.js";
import { thunk } from "redux-thunk";
import restaurantReducer from "./Restaurant/Reducer.js";
import menuItemReducer from "./Menu/Reducer.js";
import cartReducer from "./Cart/Reducer.js";
import { orderReducer } from "./Order/Reducer.js";
import restaurantsOrderReducer from "./Restaurant Order/Reducer.js";
import { ingredientReducer } from "./Ingredients/Reducer.js";
//import thunk from 'redux-thunk';



const rooteReducer = combineReducers({
    auth:authReducer,
    restaurant:restaurantReducer,
    menu:menuItemReducer,
    cart:cartReducer,
    order:orderReducer,
    restaurantOrder:restaurantsOrderReducer,
    ingredients:ingredientReducer
});

export const store = legacy_createStore(rooteReducer,applyMiddleware(thunk));