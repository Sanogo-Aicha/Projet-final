import React, { Component } from "react";
import "./MoviesComponent.css";
const MoviesCoponent = ({ movie }) => {

  return (
    <div className="movies">
      <div className="video">
        <h1> {movie.id} </h1>
        <video
          width="560"
          height="315"
          src={movie.PosterUrl}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></video>
      </div>
    </div>
  );
};
export default MoviesCoponent;
