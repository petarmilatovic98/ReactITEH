import React, {useState} from 'react'
import MoviesForm from './MoviesForm'
import MovieList from './MovieList'

function Pocetna() {

    const [movies, setMovies] = useState([]);

    function addMovie(movie) {
        setMovies([movie, ...movies]);
    }

    return (
        <div>
            <h1>Pocetna strana - dodavanje filmova u listu</h1>

            <MoviesForm addMovie={addMovie} />
            <MovieList movies={movies} />
        </div>
    );
}

export default Pocetna;