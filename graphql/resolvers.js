import { movies, getById, deleteMovie, addMovie } from "../db/db"

const resolvers = {
    Query : {
        movies : () => movies, 
        movie : (_, { id }) => getById(id)
    }, 
    Mutation : {
        addMovie : (_, { name, score }) => addMovie(name, score),
        deleteMovie : (_, { id }) => deleteMovie(id)
    }
};

export default resolvers;