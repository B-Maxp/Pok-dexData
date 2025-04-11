import Card from '../components/Card';
import './Home.css'
import { useEffect, useState } from 'react'

interface CardData {
    name: string;
    image: string;
    id: number;

}


function Home() {
    const [pokedex, setPokedex] = useState<CardData[]>([]);

    
    useEffect(() => {
        fetch("https://pokebuildapi.fr/api/v1/pokemon/generation/1")
        .then((response) => response.json())
        .then((data) => setPokedex(data))
    }, [])
    
    return (
        <main>
            {pokedex.map((el) => {
                return (
                    <Card key={el.id} image={el.image} name={el.name}/>
                )
            })}
            

        </main>
    )
}

export default Home