import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function Meni() {
    return (
        <ul style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '5px' }}>
            <Button variant="success"><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Pocetna</Link></Button>{' '}
            <Button variant="success"><Link to="/opis" style={{ textDecoration: 'none', color: 'white' }}>Opis</Link></Button>{' '}
        </ul>
    )
}

export default Meni;