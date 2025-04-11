import './CardSprite.css'

interface PropsPokemon {
    sprite: string;
    name: string;
    stats: PokemonStats;
    apiTypes: PokemonTypes[];
}
interface PokemonTypes {
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


function CardSprite({ sprite, name, apiTypes, stats }: PropsPokemon) {

    return (
        <figure>
            <figcaption>{name}</figcaption>
            <img src={sprite} alt={name} />
            {apiTypes.map((el) => {
                return (
                    <div>
                        <p className='types' key={el.name}>{el.name}</p>
                    </div>
                )
            })}
            <ul>
                <li>HP : {stats.HP}</li>
                <li>Attaque : {stats.attack}</li>
                <li>Défense : {stats.defense}</li>
                <li>Attaque Spéciale : {stats.special_attack}</li>
                <li>Défense Spéciale : {stats.special_defense}</li>
                <li>Vitesse : {stats.speed}</li>
            </ul>
        </figure>
    )
}

export default CardSprite