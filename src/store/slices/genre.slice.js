import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    genres:[
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        }
    ]
}

const reducers = {

}

const genreSlice = createSlice({
    name:"genreSlice",
    initialState,
    reducers
})

const genreReducer = genreSlice.reducer

export {genreReducer}