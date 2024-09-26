import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./Authentication/Reducer.js";
import { thunk } from "redux-thunk";
import restaurantReducer from "./Restaurant/Reducer.js";
//import thunk from 'redux-thunk';



const rooteReducer = combineReducers({
    auth:authReducer,
    restaurant:restaurantReducer,
    //menu:menuItemReducer
});

export const store = legacy_createStore(rooteReducer,applyMiddleware(thunk));