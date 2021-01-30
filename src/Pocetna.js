import React, {useState,useEffect} from 'react'
import MoviesForm from './MoviesForm'
import MovieList from './MovieList'

const LOCAL_STORAGE_KEY = "react-movie-list";

function Pocetna() {

    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        const storageMovies = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if(storageMovies){
            setMovies(storageMovies);
        }
    }, [])

    useEffect(()=>{
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(movies));
    }, [movies])

    function removeMovie(id) {
        setMovies(movies.filter(movie=> movie.id!==id));
    }

    function addMovie(movie) {
        setMovies([movie, ...movies]);
    }

    return (
        <div>
            <h1>Napravi svoju listu filmova</h1>

            <MoviesForm addMovie={addMovie} />
            <MovieList movies={movies}  removeMovie={removeMovie}/>
        </div>
    );
}

export default Pocetna;