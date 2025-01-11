import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../../Navbar/Navbar"; //L'importation de la Navbar
import { FaSearch } from "react-icons/fa"; //L'importation de l'icon de recherche
import Footer from "../../Foother/Foother"; //L'importation du composant Footer
import MovieCards from "../MoviesCards/MovieCards";
import CardsData from "../../Cards-data/data";
const ListCard = () => {
  const location = useLocation();
  const { userName, userAge } = location.state || {}; // Récupère les valeurs passées
  const [filteredMoviecards, setFilteredMoviecards] = useState([]);
  const [favorite, setFavorite] = useState([]);
  useEffect(() => {
    const Movies = CardsData.filter(
      (
        movie //la filtrage selon l'age
      ) => movie.age <= userAge
    );
    setFilteredMoviecards(Movies); // la nouvelle card filtré
  }, [userAge]);
  const [sheatem, setSheatem] = useState("");
  const handleChange = (e) => {
    let value = e.target.value;
    setSheatem(value);
  };
  // mettre une card en favoutrites
  const AddFavoritesmovies = (movies) => {
    const newFavorite = [...favorite, movies];
    setFavorite(newFavorite);
  };
  return (
    <div>
      <Navbar />
      <div>
        <h1>Bienvenue dans notre ListCard</h1>
        <p>
          <h2>{userName}</h2>
        </p>

        <input
          type="text"
          placeholder="recherche"
          id="input"
          onChange={handleChange}
          required
        />
        <button>
          <FaSearch style={{ fontSize: "20px", color: "blue" }} />
        </button>
      </div>

      <div>
        {filteredMoviecards
          .filter((value) => {
            return value.titre
              .toLocaleLowerCase()
              .includes(sheatem.toLocaleLowerCase());
          })
          // Monsieur j'aimerai mettre des cards movies en favorite je n'arrive pas ,j'ai voulu proceder ainsi
          .map((element) => {
            return (
              <div>
                <Link to={`MoviesListComponent/${element.id}`}>
                  {" "}
                  <MovieCards cards={element} />
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ListCard;
