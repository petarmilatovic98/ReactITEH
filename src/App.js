import './App.css';
import Pocetna from './Pocetna'
import Opis from './Opis'
import {Route} from 'react-router-dom'
import Meni from './Meni'
import React from 'react'

function App() {

  return (
    <div className="App" style={{backgroundColor:'#99ffbb'}}>
      <Meni />
      <Route exact path="/" component={Pocetna} />
      <Route exact path="/Opis" component={Opis} />
    </div>
  );
}

export default App;