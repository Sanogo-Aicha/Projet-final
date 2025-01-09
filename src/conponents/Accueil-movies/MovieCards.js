import react from "react";
import './MovieCards.css';
import Footer from "../Foother/Foother";
const MovieCards=({cards})=>{
    const {image,titre,description,age}=cards
    return(
        <div className="cards-movies">
          <div className="image-movies">
            <img src={image} alt="" id="image-movie"/>
          </div>
         
        </div>
    )
}

export default MovieCards;