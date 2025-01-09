import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import ToutVoir from "../../Page/Tout-voir/Voir";
export default function Navbar(){
    return(
          <nav className="nav">
            <div className="logo"><a href="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv7iDwZU3oruUMuohBvY-nD6Xuy37-_MunTg&s" alt="" id="logo-image"/></a></div>
            <div className="tout-voir"><Link to="Voir"> Tout voir</Link></div>
           
            <select name="annimé" id="">
                <option value="">Dog Man</option>
                <option value="">Zootopia 2</option>
                <option value="">Elio</option>
                <option value="">The Bad Guys 2</option>
                <option value="">The Smurfs Movie</option>
                <option value="">Demon Slayer</option>
                <option value="">Rick and Morty </option>
                <option value="">Avatar</option>
                <option value="">The Amazing World of Gumball</option>
                <option value="">Sonic Prime </option>
                <option value="">Miraculous: Les Aventures de Ladybug et Chat Noir (Nouvelles saisons)</option>
                <option value="">Bluey (Nouvelles saisons)</option>
                <option value="">Paw Patrol</option>
                <option value="">Peppa Pig (Nouvelles saisons)</option>
                <option value="">My Little Pony </option>
                <option value="">Attack on Titan (Saison finale complète)</option>
                <option value="">Demon Slayer : Nouvel arc annoncé</option>
                <option value="">My Hero Academia (Saison 7)</option>
                <option value="">Jujutsu Kaisen (Nouvelle saison)</option>
                <option value="">Spy x Family (Saison 3)</option>
                <option value="">Dragon Ball (Nouvelle série possible)</option>

            </select>
            
          </nav>
    )
}