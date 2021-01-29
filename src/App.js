import logo from './logo.svg';
import './App.css';
import Pocetna from './Pocetna'
import Opis from './Opis'
import {Route, Link} from 'react-router-dom'
import Meni from './Meni'
import React, {useState} from 'react'

function App() {

  return (
    <div className="App">
      <Meni />
      <Route exact path="/" component={Pocetna} />
      <Route exact path="/Opis" component={Opis} />
    </div>
  );
}

export default App;