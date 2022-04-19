import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialog-reducer";
import navlinkReducer from "./navlink-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";


let reducers = combineReducers({
    profile: profileReducer,
    navlink: navlinkReducer,
    dialogs: dialogReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);


export default store;