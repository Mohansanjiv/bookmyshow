import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Stream from './components/Stream';
import Buzz from './components/Buzz';
import Home from './Home';
import Menubar from './Menubar';
import Offers from './components/Offers/Offers';
import ListYourShow from './components/LIstYourShow';
import Sports from './components/Sports';
import Activities from './components/Activities/Activities';
import Events from './components/Events/Events';
import Bengaluru from './components/Cities/Bengaluru/Bengaluru';
import ICC from './components/IccEvents/ICC';
import GiftCards from './components/GiftCards/GiftCards';


const  App=()=>{ 
  return (
      <div>
      <BrowserRouter>
        <Menubar></Menubar>
         <Routes>
         <Route path='/' element={<Bengaluru></Bengaluru>}></Route>
           <Route  path='/stream' element={<Stream></Stream>}></Route>
           <Route  path='/Sports' element={<Sports></Sports>}></Route>
           <Route  path='/events' element={<Events></Events>}></Route>
           <Route  path='/Activities' element={<Activities></Activities>}></Route>
           <Route  path='/buzz' element={<Buzz></Buzz>}></Route>
           <Route  path='/icc' element={<ICC></ICC>}></Route>
           <Route  path='/listshow' element={<ListYourShow></ListYourShow>}></Route>
           <Route  path='/offers' element={<Offers></Offers>}></Route>
           <Route  path='/GiftCards' element={<GiftCards></GiftCards>}></Route>
           
         </Routes>
      </BrowserRouter>
      </div> 
  )
}
export default App


  
        


