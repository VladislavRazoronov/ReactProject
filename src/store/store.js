import {configureStore} from "@reduxjs/toolkit"
import {filmReducer, genreReducer} from "./slices";

const store = configureStore({
    reducer:{
        films:filmReducer,
        genres:genreReducer
    }
    })

export default store