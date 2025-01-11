import React, { Component } from 'react';
import "./MoviesCoponent.css"
const MoviesCoponent = ({ Movies}) => {
    const { PosterUrl1 } =Movies ;
    console.log(PosterUrl1);
  
    return (
  
  <div className="movies">
        <div className="video">
          <iframe
            src={PosterUrl1}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
   
      
    );
  };
  export default MoviesCoponent;  