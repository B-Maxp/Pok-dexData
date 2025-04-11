import CardSprite from '../components/CardSprite';
import './Pokédex.css'
import { useEffect, useState } from 'react'

interface CardData {
    name: string;
    sprite: string;
    id: number;
    apiTypes: PokemonTypes[];
    stats: PokemonStats;
    
}
interface PokemonTypes{
    name: string;
}

interface PokemonStats {
    HP: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;

}

function Pokédex() {
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
                    <CardSprite key={el.id} sprite={el.sprite} name={el.name} apiTypes={el.apiTypes} stats={el.stats}/>
                )
            })}
        </main>
    )
}

export default Pokédex