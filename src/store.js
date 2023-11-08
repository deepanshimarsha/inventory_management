import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { combineReducers } from "@reduxjs/toolkit";
import { inventoryReducer } from "./reducers/inventoryReducer";
import { salesReducer } from "./reducers/salesReducer";
import { reportsReducer } from "./reducers/reportsReducer";

const reducer = combineReducers({
  inventory: inventoryReducer,
  sales: salesReducer,
  report: reportsReducer,
});
const store = configureStore({
  reducer,
  middleware: [thunk],
});

export default store;
