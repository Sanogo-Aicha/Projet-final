import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import DataMovie from '../../Movies-Data/DataMovie';
import './MoviesListComponent.css';
import CardsData from '../../Cards-data/data';
export default function MoviesListComponent () {
    let movies=DataMovie.find((elt)=>{
      return elt.id= CardsData.id;
    })
    return (
      <div className='container'>
        <div className='postUrl'>{movies.PostUrl1} </div>
        <button><Link to="/">Retour</Link></button>
        </div>
    )
  
}
