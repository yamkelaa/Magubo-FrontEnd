import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Features/Cart/cartSlice.js"
export const store = configureStore({
    reducer : {
        cart : cartReducer
    }
})