import {combineReducers} from "redux";
import detailReducer from "./detail";
import listproductReducer from "./listproduct"
const rootReducer = combineReducers ({
    detailReducer,
    listproductReducer
})
export default rootReducer;