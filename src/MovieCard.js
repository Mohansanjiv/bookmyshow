import React from 'react'
import App from './App'
import './App.css';

const MovieCard = (props) => {
  return (
    
    <div >
               <img src={props.movieImage} alt="" />
               <p className='moveName'>{props.movieName}</p>
               <p className='MoveType'>{props.movieType}</p>
    </div>
  )
}

export default MovieCard
