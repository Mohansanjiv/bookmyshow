import React from 'react'
import { Link } from 'react-router-dom';
import './Menubar.css'
// import Movies from './Movies'
// import Eventslider from './Eventslider';

function Menubar() {
    return (
        <div>

            <nav className='navbar'>
                <div className='right'>
                    <Link to="/">
                    <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="" />
                    </Link>

                    <input type="text" name="" id="" placeholder='Search for movies here' />
                </div>
                <div className='left'>
                    <select name="" id="">
                        <option value="Kochi">Kochi</option>

                    </select>
                    <button>Sign in</button>
                </div>
            </nav>

            <div className="menu">
                <div className="rightmenu">
                    <Link to="/">Home</Link>
                    <Link to="/movies">Movies</Link>
                    <Link to="/stream">Stream</Link>
                    <Link to="/events">Events</Link>
                    <Link to="/events">Plays</Link>
                    <Link to="/Sports">Sports</Link>
                    <Link to="/Activities">Activities</Link>
                    <Link to="/buzz">Buzz</Link>
                    <Link to="/icc">IccEvents</Link>
                </div>

                <div className="menuleft">
                    <Link to="/listshow">ListYourShow</Link>
                    <Link to="">Corporates</Link>
                    <Link to="/offers">Offers</Link>
                    <Link to="/GiftCards">Gift Cards</Link>

                </div>
            </div>

           
        </div>
        // ---
    )
}

export default Menubar;