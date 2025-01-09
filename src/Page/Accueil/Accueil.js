import React from "react";
import Navbar from "../../conponents/Navbar/Navbar";
import Image from "../../conponents/Image/Image";
import Footer from "../../conponents/Foother/Foother";
import ListCards from "../../conponents/Accueil-movies/ListeCards";
const Accueil=()=>{
    return(
        <div>
           <Navbar/>
           <Image/> 
           <Footer/>
        </div>
    )
}
export default Accueil;