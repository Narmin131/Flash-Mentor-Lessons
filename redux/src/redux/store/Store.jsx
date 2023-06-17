import { configureStore } from "@reduxjs/toolkit";
import { AppReducer } from "../reducer/Reducer";

export const store = configureStore({
    reducer: {
        reducerForCounter: AppReducer,
        
    }
})