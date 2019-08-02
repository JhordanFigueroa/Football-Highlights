import React from 'react'
import './Footer.css'

function Footer() {
    return(
        <div className="footer-container">
            <a href="https://www.fcbarcelona.com/en/club/news#" alt="barca">
                <img className="barca" src="https://upload.wikimedia.org/wikipedia/fr/a/a1/Logo_FC_Barcelona.svg" alt="link"/>
            </a>
            <a href="https://www.juventus.com/en/news/news/#filtered" alt="jueventus">
                <img className="jueventus" src="https://worldsportlogos.com/wp-content/uploads/2018/01/Juventus-logo.png" alt="new"/>
            </a>
            <a href="https://en.psg.fr/" alt="psg">
                <img className="psg" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1200px-Paris_Saint-Germain_F.C..svg.png" alt="link"/> 
            </a>
        </div>
    )
}

export default Footer