import watchSlice from "../featutes/watches/watchSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store=configureStore({
    reducer:{
        watch:watchSlice
    }
})