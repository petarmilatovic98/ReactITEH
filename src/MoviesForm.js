import React,{useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import './MovieFormCSS.css'


function MoviesForm({addMovie}){

    const [movie, setMovie] = useState({
        id: "",
        name: ""
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
      <form class="main-form" onSubmit={handleSubmit}>
          <input autoComplete="off" onChange={handleMovieInputChange} value={movie.name} name="name" type="text"/>
          <button class="addbtn" type="submit">Dodaj</button>
      </form>  
    );
}

export default MoviesForm;