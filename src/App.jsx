import PokemonCard from "./components/PokemonCard"
import { useState } from "react";
import NavBar from "./components/NavBar";
import { useEffect } from "react";

  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];

  
 function App() {
  useEffect(
    () => {
      alert("hello pokemon trainer :)")
    },
    []
  );
    
  const [pokemonIndex, setpokemonIndex] = useState(0);

    const pokemonDisplay = (pokemon) => {
      setpokemonIndex(pokemonList.filter((item) => item !== pokemon));
    };

    return (
      <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      <NavBar pokemonList={pokemonList} pokemonIndex={pokemonIndex} pokemonDisplay={pokemonDisplay} />
      </div> 
    );
}



export default App;