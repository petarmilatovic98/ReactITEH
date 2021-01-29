import React from "react";
import Movie from './Movie'

function MovieList({movies, removeMovie}) {
    return(
        <ul>
            {movies.map(movie=>(
                <Movie key={movie.id} movie={movie} removeMovie={removeMovie}/>
            ))}
        </ul>
    );
}

export default MovieList;