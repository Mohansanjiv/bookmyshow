import React, { useState } from 'react'
import App from './App';
// import { Button } from 'reactstrap'


const carosolImg =[          
             "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICAzMDYuM0sgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331686-nwatwgbhjc-portrait.jpg",          
             "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC40LzEwICAyMDQuMUsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00338629-adeyjbxpah-portrait.jpg",         
             "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTkuNksgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00362792-dukzuaqtqf-portrait.jpg",
             "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTM5LjVLIExpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00340111-tumdlxmhgw-portrait.jpg",
             "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MjUuMUsgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00361640-cenlrrtbdu-portrait.jpg",
             "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00355405-uvzapgqrqj-portrait.jpg"    
         ];

const Carosol = () => {
 const[imgNo, setImgNo]=useState(0);

 const carsolManvr=(()=>{
  
  for(var i=0; i<=carosolImg.length; i++){
    setInterval(() =>{ 
      setImgNo(imgNo+1);
    },6000);
   
  }
  for(var j=carosolImg.length; j>=0; j--){
    setInterval(() =>{ 
      setImgNo(imgNo+1);
    },6000);
   
  }
})();
  return (
    <div>
        <button onClick={carsolManvr}>PREV</button>
         <img src={carosolImg[imgNo]}   alt="" />
        <button onChange={ carsolManvr}>NEXT</button>
    </div>
  )
}

export default Carosol
