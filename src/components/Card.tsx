import './Card.css'

interface PropsPokemon{
    image: string;
    name: string;
}

function Card({image, name}: PropsPokemon) {

    return (
        <figure>
            <img src={image} alt={name} />
            <figcaption>{name}</figcaption>


        </figure>
    )
}

export default Card
