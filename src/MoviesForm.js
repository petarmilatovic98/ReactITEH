import React,{useState} from 'react'
import {v4 as uuidv4} from 'uuid'


function MoviesForm({addMovie}){

    const [movie, setMovie] = useState({
        id: "",
        name: ""
        // artist: ""
    });

    function handleMovieInputChange(e){
        setMovie({...movie, name: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(movie.name.trim()){
            addMovie({...movie, id:uuidv4()});
            setMovie({...movie, name:""});
        }
    }

    return(
      <form onSubmit={handleSubmit}>
          <input onChange={handleMovieInputChange} value={movie.name} name="name" type="text"/>
          <button type="submit">Dodaj</button>
      </form>  
    );
}

export default MoviesForm;