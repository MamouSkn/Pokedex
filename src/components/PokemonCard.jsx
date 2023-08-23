// const pokemonList = [
//     {
//       name: "bulbasaur",
//       imgSrc:
//         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
//     },
//     {
//       name: "mew",
//     },
//   ];


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

export default PokemonCard;