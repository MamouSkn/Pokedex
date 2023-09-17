import PropTypes from "prop-types";

function PokemonCard(props)  {
    // console.log(props.pokemon.name)

return (
    // il faut toujours mettre des balises figures pour les images !

        <>
             <h1>{props.pokemon.name}</h1>
            <img src={props.pokemon.imgSrc} alt={props.pokemon.name} /></>
        )
}

//     <div>
//         <figure> {props.pokemon.imgSrc === undefined ? "???" : <img src={props.pokemon.imgSrc} alt={props.pokemon.name}/>}
//         </figure>
//         <figcaption>{props.pokemon.name}</figcaption>
//     </div>
// )
// }

PokemonCard.propTypes = { 
    pokemon: PropTypes.shape({
        imgSrc: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
}

export default PokemonCard;