import React from "react";

function Movie({movie}) {
    return(
        <div style={{display:"flex"}}>
            <li style={{color:'black'}}>{movie.name}</li>
            <button>X</button>
        </div>
    );
}

export default Movie;