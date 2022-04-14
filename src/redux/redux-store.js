import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialog-reducer";
import navlinkReducer from "./navlink-reducer";
import profileReducer from "./profile-reducer";


let reducers = combineReducers({
    profile: profileReducer,
    navlink: navlinkReducer,
    dialogs: dialogReducer
});

let store = createStore(reducers);


export default store;