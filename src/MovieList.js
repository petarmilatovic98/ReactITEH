import React from "react";
import Movie from './Movie'
import './MovieListCSS.css'

function MovieList({ movies, removeMovie }) {
    return (
        <div class="pozadina">
            <ul class="list">
                {movies.map((movie) => (
                    <Movie key={movie.id} movie={movie} removeMovie={removeMovie} />
                ))}
            </ul>
        </div>
    );
}

export default MovieList;