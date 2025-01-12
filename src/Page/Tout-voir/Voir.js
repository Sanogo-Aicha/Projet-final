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
      <Navbar />
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

export default ToutVoir;
