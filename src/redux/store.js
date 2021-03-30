import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sideBarReducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBar: sideBarReducer
});

const store = createStore(reducers);

export default store