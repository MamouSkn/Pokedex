// import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
function NavBar ({pokemonIndex, PreviousClick, FollowingClick}) {
  // useEffect(
  //   () => {
  //     alert("pika pikachu !!!")
  //   },
  //   []
  // );  
  
  return (
    <div>
      {pokemonIndex === '3' ? alert("pika pikachu !!!") : null}
        <button onClick={PreviousClick}>Précédent</button>
        <button onClick={FollowingClick}>Suivant</button>
      </div>);
      
}

export default NavBar;

