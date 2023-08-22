const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];


function PokemonCard()  {
    const pokemon = pokemonList[0];
    console.log(pokemon.imgSrc)

return (
    // <div>
    //     <h1>{pokemon.name}</h1>
    //     <img src={pokemon.imgSrc} />
    // </div>;

    // il faut toujours mettre des balises figures pour les images !

    <div>
        <figure>   
        {pokemon.imgSrc === undefined ? "???" : <img src={pokemon.imgSrc} alt={pokemon.name}/>}
        </figure>
        <h1>{pokemon.name}</h1>
        <figcaption>Bulbasaur</figcaption>

        
        
    </div>

)
}


export default PokemonCard;