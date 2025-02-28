import { configureStore } from "@reduxjs/toolkit";  
import movieReducer from './MovieSlice';
import thunk from "redux-thunk";

export const movieStore = configureStore({
    reducer: {
        movie: movieReducer
    },   
    
});
 
