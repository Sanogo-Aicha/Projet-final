import react from "react";
import './MovieCards.css';
import AddFavorite from "../../Add-Favorite/AddFavorites";
const MovieCards=({cards})=>{
    const {image,titre,description,age}=cards
    return(
        <div className="cards-movies">
          <div className="image-movies">
            <img src={image} alt="" id="image-movie"/>
            <div className="overlay"><AddFavorite/></div>
          </div>
         
        </div>
    )
}

export default MovieCards;