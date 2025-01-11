import React from "react";
import './imageAccueil.css';
const ImageAccueil=()=>{
    
    return(
        <div className="containers">
            <div className="texte">
                <h1>Bienvenue dans l'univers enchanté des dessins animés !</h1>
                <em>Plongez dans un monde de magie, d'aventures, et de rires avec FINCS <br />
                    votre destination ultime pour tout ce qui concerne les dessins animés!</em>
            </div>
         <div className="container">
         <div className="container-image"><img src="https://cdn.futura-sciences.com/cdn-cgi/image/width=1024,quality=50,format=auto/sources/fs-cellulo.jpg" alt="" id="image" /></div>
           <div className="container-image"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn-KfFrfo3cBvvasf0hH7EZjyZFebMivykJw&s" alt=""id="image" /></div>
           <div className="container-image"><img src="https://fr.web.img3.acsta.net/img/b3/62/b36216471e71df2ebc1d423c640f4438.jpg" alt="" id="image"/></div>
         </div>
         <div className="container">
         <div className="container-image"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8-PZC1N_0ssekqSXywPGIFcP1xnxvkjkaOc0VAVfSTojkQeC1tupbXW8x9d_iNlGsvSQ&usqp=CAU" alt="" id="image"/></div>
         <div className="container-image"><img src="https://play-lh.googleusercontent.com/DSmUZENYOazqvW8P6Cre5Dl7feiut1Rvl3V4PSKVeZ5QOv6ZjCdUegBNW0Oedj1Mnk3-jDZFfiQMpH_sK2M" alt="" id="image"/></div>
         <div className="container-image"><img src="https://static.hitek.fr/img/up_m/483705617/avatarlederniermaitredelairnetflix.png" alt="" id="image" /></div>
       </div>
       <div className="container">
         <div className="container-image"><img src="https://resize.programme-television.org/landscape/var/premiere/storage/images/tele-7-jours/news-tv/ce-nouveau-disney-est-numero-1-des-ventes-sur-amazon-4685285/99768447-1-fre-FR/Ce-nouveau-Disney-est-numero-1-des-ventes-sur-Amazon.jpg" alt="" id="image"/></div>
         <div className="container-image"><img src="https://focus.telerama.fr/2023/12/19/0/1315/3858/2572/1200/0/60/0/724d5df_1703002605740-vice-versa-2-01.jpg" alt="" id="image"/></div>
         <div className="container-image"><img src="https://www.cinetrafic.fr/images/affiches/fiche/aff_8695020190807110003.jpg" alt="" id="image"/></div>
       </div>
       </div>
    )
}
export default ImageAccueil;