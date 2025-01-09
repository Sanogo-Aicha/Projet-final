/*
import react from "react";
import { useState } from "react";
import moviesData from "../movies-data/data";
import MovieCards from "./MovieCards";
import Navbar from "../Navbar/Navbar";
import { FaSearch } from "react-icons/fa";//L'importation de l'icon de recherche
const ListCards=()=>{
    let table=moviesData
   
    return(
        <div className="b">
            <Navbar/>
            <div>
                <input type="text" placeholder="recherche" id="input"/>
                <button><FaSearch style={{ fontSize: "20px", color: "blue" }} /></button>
            </div>           
        </div>
    )
}
export default ListCards;
*/

import React from "react";
import { useLocation } from "react-router-dom";
import {  useParams } from 'react-router-dom';
import Navbar from "../Navbar/Navbar"; //L'importation de la Navbar
import { FaSearch } from "react-icons/fa"; //L'importation de l'icon de recherche
import Footer from "../Foother/Foother"; //L'importation du composant Footer
import MovieCards from "./MovieCards";
import moviesData from "../movies-data/data";
const ListCard = () => {
  const location = useLocation();
  const { userName, userAge } = location.state || {}; // Récupère les valeurs passées
  /*
  let age=useParams().age
    let movie=moviesData.find((elt)=>{
      return elt.age==age;
    })
      */
  return (
    <div>
      <Navbar />
      <div>
        <h1>Bienvenue dans notre ListCard</h1>
        <p>
          <h2>{userName}</h2>
        </p>

        <input type="text" placeholder="recherche" id="input" />
        <button>
          <FaSearch style={{ fontSize: "20px", color: "blue" }} />
        </button>
      </div>

      <div>
        {
          moviesData.filter((val)=>{
            return(
              val.age={userAge}
            )
           })
         .map((element)=>{
          return(
            <MovieCards cards={element}/>
          )
         }) 
        }
      </div>
    </div>
  );
};

export default ListCard;
