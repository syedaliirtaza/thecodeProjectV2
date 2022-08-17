import React, {useState} from 'react'
import "./MobileRes.css";
import { FaTwitter } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import MenuToggle from "./MenuToggle";
import {Link} from "react-scroll";

function MobileRes() {
    const [isOpen, setOpen] = useState(false);
  return ( 
    <div className='mobileHeaderContainer'>
    <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
    {!isOpen ? 
    null:
        <div className='mobileHeaderContainer_items'>
            <div className='mobileItems'>
            <Link to="about" smooth={true} duration={1000}><p>Content</p></Link>
            </div>
            <div className='mobileItems'>
            <Link to="collect" smooth={true} duration={1000}><p>Collective</p></Link>
            </div>
            <div className='mobileItems'>
            <Link to="team" smooth={true} duration={1000}><p>Team</p></Link>
            </div>
            <div className='mobileItems'>
            <Link to="me" smooth={true} duration={1000}><p>About</p></Link>
            </div>
            <div className='mobileItems'>
            <p><a href="/mint">Mint</a></p>
            </div>
        </div>
     }
    </div>
  )
}

export default MobileRes