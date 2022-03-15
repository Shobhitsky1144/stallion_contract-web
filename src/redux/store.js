import { createStore, combineReducers } from "redux";
import { loginUserReducer } from "./reducers/userReducer";

const rootReducer = combineReducers({ loginUserReducer });
const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;
const initialState = {
  loginUserReducer: {
    currentUser: currentUser,
  },
};

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
