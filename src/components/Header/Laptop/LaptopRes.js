import React from 'react'
import "./LaptopRes.css";
import {Link} from "react-scroll";

function LaptopRes() {
  return (
    <div className='headerContainer_items'>
        <div className='items'>
                <Link to="about" smooth={true} duration={1000}><p>Concept</p></Link>
            </div>
            <div className='items'>
            <Link to="collect" smooth={true} duration={1000}><p>Collective</p></Link>
            </div>
            <div className='items'>
            <Link to="team" smooth={true} duration={1000}><p>Team</p></Link>
            </div>
            <div className='items'>
            <Link  to="me" smooth={true} duration={1000}><p>About</p></Link>
            </div>
            <div className='items'>
            <p title='Coming Soon'><a href="/mint">Mint</a></p>
            </div>
    </div>
  )
}

export default LaptopRes