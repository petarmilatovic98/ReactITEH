import React from "react";

function Movie({movie,removeMovie}) {

    function handleRemoveClick(){
        removeMovie(movie.id);
    }

    return(
        <div style={{display:"flex"}}>
            <li style={{color:'black'}}>{movie.name}</li>
            <button onClick={handleRemoveClick}>X</button>
        </div>
    );
}

export default Movie;