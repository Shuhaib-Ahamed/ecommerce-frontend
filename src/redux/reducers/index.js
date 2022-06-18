// import { combineReducers } from 'redux'
import variables from "./variables";
import { createStore } from "redux";

// const rootReducer = combineReducers({
//     variables
// })
const store = createStore(variables);

export default store;
