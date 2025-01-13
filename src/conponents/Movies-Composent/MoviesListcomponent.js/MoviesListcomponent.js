import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import DataMovie from '../../Movies-Data/DataMovie';
import './MoviesListComponent.css';
import CardsData from '../../Cards-data/data';
import MoviesCoponent from '../MoviesComponents/MoviesComponent';
import Navbar from '../../Navbar/Navbar';
export default function MoviesListComponent () {
  let id=useParams().id
  let movies=DataMovie.find((elt)=>{
    return elt.id==id;
  })

  
    return (
      <>
      <Navbar/>
      <div className='container-movies'>
        <div className='postUrl'>
        
              <MoviesCoponent movie={movies}/>
             
           </div>
        
        </div>
        </>
    )
  
}
