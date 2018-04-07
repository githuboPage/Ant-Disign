import React from "react"
import {combineReducers} from "redux"
import profileReducer from "./profile"
import courseReducer from "./course"
const reducer=combineReducers({
    profile:profileReducer,
    course:courseReducer,
});
export default reducer;