import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const genreService = {
    getAll:axiosService.get(urls.genres.getAll)
}

export {genreService}