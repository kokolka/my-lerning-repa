import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialog-reducer";
import navlinkReducer from "./navlink-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    navlink: navlinkReducer,
    dialogs: dialogReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;