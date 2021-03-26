import {combineReducers} from "redux"
import articleSelectReducer from "./articleSelect.js"

const allReducers= combineReducers({
    article: articleSelectReducer,
})

export default allReducers