import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    films:[
        {
            "adult": false,
            "backdrop_path": "/h56edmERPTkey89SqyKu4hINVNy.jpg",
            "genre_ids": [
                28,
                53
            ],
            "id": 575264,
            "original_language": "en",
            "original_title": "Mission: Impossible - Dead Reckoning Part One",
            "overview": "Ethan Hunt and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands. With control of the future and the world's fate at stake and dark forces from Ethan's past closing in, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan must consider that nothing can matter more than his mission—not even the lives of those he cares about most.",
            "popularity": 2820.303,
            "poster_path": "/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
            "release_date": "2023-07-08",
            "title": "Mission: Impossible - Dead Reckoning Part One",
            "video": false,
            "vote_average": 7.7,
            "vote_count": 2226
        }
    ]
}

const reducers = {
    addFilm:(state,action)=>{
        const film=action.payload.films
        state.films.push(film)
    }
}

const filmSlice = createSlice({
    name:"filmSlice",
    initialState,
    reducers
})

const {addFilm} = filmSlice.actions;
const filmReducer = filmSlice.reducer

export {filmReducer,addFilm}