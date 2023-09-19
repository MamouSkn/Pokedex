/* eslint-disable react/prop-types */
function NavBar ({pokemonList, setpokemonIndex}) {

  return (
    <div> 
    <h1>Pokedex</h1>
        <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={pokemonList.name}>
            {/* {pokemon.name} {pokemon.imgSrc} */}
            <input type="text" defaultValue={pokemon.name} />
            <button onClick={() => setpokemonIndex(index)}>Pokeball</button>
          </li>
            ))}
          </ul>
    </div>)
}

export default NavBar;

