import React from 'react'
import AnalogueClock from 'react-analogue-clock';
import image from './slika.png'


function Opis() {

    const clockOptions = {
        baseColor: '#ffffff',
        borderColor: '#000000',
        borderWidth: 5,
        centerColor: '#000000',
        handColors: {
            hour: '#000000',
            minute: '#000000',
            second: '#000000',
        },
        notchColor: '#000000',
        numbersColor: '#000000',
        showNumbers: true,
        size: 300
    };

    return (
        <div>
            <h1>O aplikaciji</h1>
            <br></br>
            <h4 style={{ marginLeft:250, marginRight:250 }}>Aplikacija pruža mogućnosti korisnicima da kreiraju svoju listu filmova. Kada film bude odgledan,
            korisnik ga može ukloniti iz liste. Filmovi se čuvaju u lokalnom storage-u, tako da i nakon
            ponovog pokretanja stranice lista ostaje sačuvana.
            </h4>
            <br></br>
            <br></br>
            <div style={{ display: "flex", justifyContent: 'space-evenly' }}>
                
                <AnalogueClock {...clockOptions} />
                <img src={image} alt="" width="300px" height="300px" />
               
            </div>
            <br></br>
            <br></br>
        </div>

    );
}

export default Opis;