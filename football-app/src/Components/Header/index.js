import React from 'react';
import './Header.css';
import Welcome from '../Welcome/'
import { Link } from "react-router-dom";

function Header(props) {
       return(
           <div className="header-container">
               <Welcome name="Futbol Highlights"/>
               <nav className="link-container">
                    <Link className="home-link" to='/'>Home</Link>
                    <br></br>
                    <Link className="news-link" to="/SportNews/">SportNews</Link>
               </nav>
           </div>
       )
}

export default Header