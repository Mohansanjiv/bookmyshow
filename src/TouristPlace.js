import React from 'react';
import  './TouristPlace.css';
// import img1 from 'images/image-1.jpg'

export default function TouristPlace(props) {
  return (
    <div className='tourist-camp'>
         <h2>{props.name}</h2>
         <img  src={props.imageurl}></img>
         <h4>{props.type}</h4>
         <p>{props.description}</p>
         <p className='moreinfo'>
           <a href={props.linkurl}>More Info</a>
         </p>
    </div>
  )
}
