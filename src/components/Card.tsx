import './Card.css'

interface PropsPokemon{
    image: string;
    name: string;
    pokedexId: number;
}

function Card({image, name, pokedexId}: PropsPokemon) {

    return (
        <figure>
            <img src={image} alt={name} />
            <p>N°{pokedexId}</p>
            <figcaption>{name}</figcaption>
        </figure>
    )
}

export default Card
