import './Pokédex.css'
import { useEffect, useState } from 'react'


function Pokédex() {
    const [pokedex, setPokedex] = useState([]);

    useEffect(() => {
        fetch("https://pokebuildapi.fr/api/v1/pokemon/generation/1")
            .then((response) => response.json())
            .then((data) => setPokedex(data))
    }, [])

    return (
        <figure>

            <h1>Je suis dans le pokédex</h1>

        </figure>
    )
}

export default Pokédex