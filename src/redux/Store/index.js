import { createStore}  from "redux"
import  allReducers from "../Reducers"

const store = createStore(allReducers)

export default store;

// // import { configureStore } from "@reduxjs/toolkit"
// import userSlice from "../features/userSlice";
// import { configureStore } from "@reduxjs/toolkit";

// const store = configureStore({
//     reducer:{
//         user:userSlice,
//     }
// })



// export default store;