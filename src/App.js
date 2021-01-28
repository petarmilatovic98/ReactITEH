import logo from './logo.svg';
import './App.css';
import Pocetna from './Pocetna'
import Opis from './Opis'
import {Route, Link} from 'react-router-dom'
import Meni from './Meni'
import React, {useState} from 'react'
import MoviesForm from './MoviesForm'
import MovieList from './MovieList'

function App() {

 // const [movies, setMovies] = useState([]);

  //function addMovie(movie) {
   // setMovies([movie, ...movies]);
  //}

  return (
    <div className="App">
      <Meni />
      <Route exact path="/" component={Pocetna} />
      <Route exact path="/Opis" component={Opis} />

     {/*  <MoviesForm addMovie={addMovie} />
      <MovieList movies={movies}/> */}
    </div>
  );
}

export default App;