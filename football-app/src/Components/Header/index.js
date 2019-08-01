import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";

function Header() {
       return(
           <div className="header-container">
               <h1>Latest Futbol Feed </h1>
               <nav className="link-container">
                    <Link className="home-link" to='/'>Home</Link>
                    <br></br>
                    <Link className="news-link" to="/SportNews/">SportNews</Link>
               </nav>
           </div>
       )
}

export default Header