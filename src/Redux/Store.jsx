import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlices";
export const Store=configureStore({
    reducer:{
        cart : CartSlice.reducer
    }
});
