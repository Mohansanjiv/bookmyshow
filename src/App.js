import React from 'react';
import MovieCard from './MovieCard';
import './App.css'

import Example from './Example';


const MovieCards = [
  {
      imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICAzMDYuM0sgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331686-nwatwgbhjc-portrait.jpg",
      movieName:"Jailer",
      movieType:"Action/Darama/Thriller"
  },
  {
      imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC40LzEwICAyMDQuMUsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00338629-adeyjbxpah-portrait.jpg",
      movieName:"Gadhar2 the katha2",
      movieType:"Action/Darama/Period"
  },
  {
    imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTkuNksgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00362792-dukzuaqtqf-portrait.jpg",
    movieName:"Toby",
    movieType:"Crime/Darama/Period"
},
{
  imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC43LzEwICAxMDZLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00361712-npjeqfmyrt-portrait.jpg",
  movieName:"OMG2",
  movieType:"Comedy/Darama"
},
{
  imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTIzLjlLIExpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00340111-tumdlxmhgw-portrait.jpg",
  movieName:"Dream Girls 2",
  movieType:"Comedy/Darama/Romantic"
}
];

const  App=()=>{ 
  return (
    <div> 
    <Example/>
      <p className='recomd-hdng'>Recommended Movies</p>
      <div className='movieCard'>
        {
          MovieCards.map((x, index)=>{
            return(
                <MovieCard 
                  movieImage={x.imgLink}   
                  movieName={x.movieName}
                  movieType={x.movieType}
                ></MovieCard>            
            )
          })
        }
        
      </div>
      </div>
  )
}
export default App



  
        


