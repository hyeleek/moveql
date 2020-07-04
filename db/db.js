import fetch from "node-fetch";

const LIST_URL = "https://yts.mx/api/v2/list_movies.json?";
const DETAIL_URL = "https://yts.mx/api/v2/movie_details.json?";
const SUGGESTION_URL = "https://yts.mx/api/v2/movie_suggestions.json?";

export const getMovies = (limit, rating) => {
    let REQUEST_URL = LIST_URL;
    if ( limit > 0) {
        REQUEST_URL += `limit=${limit}`;
    } 
    if ( rating > 0) {
        REQUEST_URL += `&minimum_rating=${rating}`;
    }
    return fetch(`${REQUEST_URL}`)
    .then(res => res.json())
    .then(json => json.data.movies);
};

export const getMovie = (id) => {
    let REQUEST_URL = DETAIL_URL;
    REQUEST_URL += `movie_id=${id}`;
    return fetch(`${REQUEST_URL}`)
    .then(res => res.json())
    .then(json => json.data.movie);
};


export const getSuggestions = (id) => {
    let REQUEST_URL = SUGGESTION_URL;
    REQUEST_URL += `movie_id=${id}`;
    return fetch(`${REQUEST_URL}`)
    .then(res => res.json())
    .then(json => json.data.movies);
};
