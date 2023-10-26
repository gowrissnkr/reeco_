import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./itemSlice"

export const appStore = configureStore({
    reducer : {
        itemReducer : itemReducer
    }
})