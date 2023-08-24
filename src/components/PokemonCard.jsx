import PropTypes from "prop-types";

function PokemonCard(props)  {
    console.log(props.pokemon.name)

return (
    // il faut toujours mettre des balises figures pour les images !

    <div>
        <figure> {props.pokemon.imgSrc === undefined ? "???" : <img src={props.pokemon.imgSrc} alt={props.pokemon.name}/>}
        </figure>
        <figcaption>{props.pokemon.name}</figcaption>
    </div>

)
}

PokemonCard.PropTypes = { 
    pokemon: PropTypes.shape({
        imgSrc: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
}

export default PokemonCard;