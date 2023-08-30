import React from 'react'

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