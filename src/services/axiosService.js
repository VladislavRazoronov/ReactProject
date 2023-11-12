import axios from "axios";
import {baseURL} from "../constants/urls";

const axiosService = axios.create({baseURL:baseURL,headers:{
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmUxMDExNjkyMDkwYTM2NTI1OTAxZTU3MzEwZTYwNyIsInN1YiI6IjY1NGEyNDgzMzkxYjljMDEwMGVkYTc4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.didzPaDqSsNc2UUrwRMYvgUwxyb9vGuDk7Z_dUZbodg'
    }
})

export {axiosService}