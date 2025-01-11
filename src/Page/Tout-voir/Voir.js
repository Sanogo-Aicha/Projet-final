/*
import React from "react";
import { useState } from "react";
import Navbar from "../../conponents/Navbar/Navbar";
import { Link } from "react-router-dom";
import "./Voir.css"
import moviesData from "../../conponents/movies-data/data";
import MovieCards from "../../conponents/Accueil-movies/MovieCards";
const ToutVoir=()=>{
    
      console.log(sheatem);
      
      /*const handlefiler=()=>{
        const movieage=moviesData.filter((val)=>{
            return(
                val.age.includes(sheatem)
            )
        })
        .map((element)=>{
            return(
                <div>
                <div key{}>
                    <MovieCards cards={element}/>
                </div>
                
                </div> 
                        )
                      }) 
      }
                     

    return(
        <div>
            <Navbar/>
            <div><em>Remplicez ce formulaire</em></div>
            <form action="traitement" method="get" >
                <input type="text" placeholder="ENTREZ VOTRE NOM"  required/>
                <input type="text" placeholder="ENTREZ VOTRE AGE"name="age" id="age"  onChange={handleChange}required/><p></p>
                <Link to="/ListCard"><button id="button-card" type="submit" >Clickez</button></Link>
            </form>
           
        </div>
    )
}
export default ToutVoir;*/


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Voir.css";
import Navbar from "../../conponents/Navbar/Navbar";
import Footer from "../../conponents/Foother/Foother";
const ToutVoir = () => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Redirige vers ListCard avec les données
    navigate("/ListCard", {
      state: { userName, userAge },
    });
  };
  return (
  
    <div>
       <Navbar/> 
      <div>
        <em>Remplissez ce formulaire</em>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ENTREZ VOTRE NOM"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="ENTREZ VOTRE AGE"
          value={userAge}
          onChange={(e) => setUserAge(e.target.value)}
          required
        />
        <p></p>
        <button id="button-card" type="submit">
          Cliquez
        </button>
      </form>
    </div>
      
  );
};

export default ToutVoir;