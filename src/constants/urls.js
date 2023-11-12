const baseURL = "https://api.themoviedb.org/3/"

const movies = "/movie"
const genres = "/genre"

const urls={
    movies:{
        getAll:`/discover${movies}`,
        byId:(id)=>`${movies}/${id}`
    },
    genres:{
        getAll:`${genres}${movies}/list`

    }
}

export {baseURL,urls}