import React from "react";
import Navbar from "../../conponents/Navbar/Navbar";
import ImageAccueil from "../../conponents/Image-de-page-accueil/ImageAccueil";
import Footer from "../../conponents/Foother/Foother";
const Accueil=()=>{
    return(
        <div>
           <Navbar/>
           <ImageAccueil/> 
           <Footer/>
        </div>
    )
}
export default Accueil;