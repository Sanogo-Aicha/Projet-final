import React, { Component } from "react";
import "./MoviesComponent.css";
const MoviesCoponent = ({ movies }) => {
  const { PosterUrl } = movies;

  return (
    <div className="movies">
      <div className="video">
        <h1> {movies.id} </h1>
        <video
          width="560"
          height="315"
          src={movies.PosterUrl}
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
