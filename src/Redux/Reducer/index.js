import { combineReducers } from "redux";
import { productReducer } from "./reducer";

const reducer = combineReducers({
    allProducts: productReducer,
})

export default reducer;