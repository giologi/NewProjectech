import {combineReducers} from "redux";
import contentReducer from "./contentReducer";


const appReducer = combineReducers({
    content: contentReducer,
});


const rootReducer = (state, action) => {
    return appReducer(state, action)
};


export default rootReducer;