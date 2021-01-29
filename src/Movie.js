import React from "react";
import './MovieCSS.css'

function Movie({movie,removeMovie}) {

    function handleRemoveClick(){
        removeMovie(movie.id);
    }

    return(
        <div class = "container">
        <li class="item">{movie.name}</li>
        <button class="Xbtn" onClick={handleRemoveClick}>X</button>
        </div>
        );
}

export default Movie;