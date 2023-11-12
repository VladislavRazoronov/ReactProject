import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const filmService = {
    getAll:axiosService.get(urls.movies.getAll),
    getById:(id)=>axiosService.get(urls.movies.byId(id))
}

export {filmService}