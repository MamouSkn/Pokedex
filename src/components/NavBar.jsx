function NavBar ({PreviousClick, FollowingClick}) {
  useEffect(
    () => {
      alert("pika pikachu !!!")
    },
    []
  );  
  
  return (
    <div>
        {/* <h1>Pokemon List</h1>
        <ul>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.name}>
            {pokemon.name} {pokemon.imgSrc}
            <input type="text" defaultValue={pokemon.name} />
            <button onClick={() => displayPokemon(pokemon)}>Pokemon</button>
          </li>
        ))}
      </ul> */}

        <button onClick={PreviousClick}>Précédent</button>
        <button onClick={FollowingClick}>Suivant</button>
      </div>);
}

export default NavBar;

