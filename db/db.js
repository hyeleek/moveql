export let movies = [
    {
        id : 1,
        name : "Her", 
        score : 95.5
    }, 
    {
        id : 2,
        name : "Call me by your name", 
        score : 98.1
    },
    {
        id : 3,
        name : "Lalaland", 
        score : 85.2
    },
    {
        id : 4,
        name : "Starwars", 
        score : 10
    },
    {
        id : 5,
        name : "Antman", 
        score : 89.1
    },
    {
        id : 6,
        name : "Logan", 
        score : 73.3
    },
]

export const getById = id => {
    const filteredMovies = movies.filter( movie => id === movie.id);
    return filteredMovies[0];
}

export const deleteMovie = id => {
    const cleanedMovies = movies.filter( movie => id !== movie.id);
    if ( movies.length > cleanedMovies.length ) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id : movies.length + 1,
        name, 
        score,
    };
    movies.push(newMovie);
    return newMovie;
}