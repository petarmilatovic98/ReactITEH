import React from 'react'
import {Link} from 'react-router-dom'

function Meni(){
    return (
        <ul>
            <li>
                <Link to="/">Pocetna strana</Link>
            </li>
            <li>
                <Link to="/opis">Opis</Link>
            </li>
        </ul>
    )
}

export default Meni;