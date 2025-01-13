import react from "react";
import './MovieCards.css';
const MovieCards=({cards})=>{
    const {image}=cards
    return(
      <div>
        <div className="cards-movies"> 
          <div className="image-movies">
            <img src={image} alt="" id="image-movie"/>
          </div>
        </div>
        </div>
    )
}

export default MovieCards;