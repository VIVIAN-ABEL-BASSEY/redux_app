import { combineReducers } from "redux";
import blogReducer from "./blogReducer";
import counterReducer from "./counterReducer";

const allReducers = combineReducers({
    blog: blogReducer,
    counter: counterReducer
})

export default allReducers;