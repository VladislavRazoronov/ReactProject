import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";


import store from "../../../store/store";
import {filmService} from "../../../services";
import {addFilm} from "../../../store";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";


const MoviesList = () => {
    const {films} = useSelector(store.films)
    const dispatch = useDispatch()
    useEffect(()=>{
        filmService.getAll().then((films)=>dispatch(addFilm({films})))
    },[])
    return (
        <div>
            {films.map((film)=><MoviesListCard key={film.id} props={film}/>)}
        </div>
    );
}

export {MoviesList};