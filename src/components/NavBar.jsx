function NavBar ({PreviousClick, FollowingClick}) {
    return (
    <div>
        
        <button onClick={PreviousClick}>Précédent</button>
        <button onClick={FollowingClick}>Suivant</button>
      </div>);
}

export default NavBar;

