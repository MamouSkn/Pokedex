import PokemonCard from "./components/PokemonCard"
import { useState } from "react";


function App() {
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

    
    const [pokemonIndex, setpokemonIndex] = useState(0);

    const handleFollowingClick = () => {
      if (pokemonIndex < pokemonList.length - 1) {
        setpokemonIndex(pokemonIndex + 1);
      }
    };

    const handlePreviousClick = () => {
      if (pokemonIndex > 0) { 
        setpokemonIndex(pokemonIndex - 1);
      }
    }

    return (<div>
      {/* <p>{pokemonIndex}</p> */}
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      <button onClick={handlePreviousClick}>Précédent</button>
      <button onClick={handleFollowingClick}>Suivant</button>
    </div>);


  // return (
  //   <div>
  
  //   </div>
  // );
}


export default App;