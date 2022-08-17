import React from 'react'
import "./Header.css";
import { FaTwitter } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import LaptopRes from './Laptop/LaptopRes';
import MobileRes from "./Mobile/MobileRes";
import { useMediaQuery } from "react-responsive";
import {Link} from "react-router-dom";

function Header() {
    
    const isMobile = useMediaQuery({ maxWidth: 780 });
  
    return (
    <div className='headerContainer'>
        <div className='headerContainer_logo'>
            <h1 className='logo_heading'>THE CODE</h1>
        </div>
        <div className='headerContainer'>
            {isMobile ? <MobileRes /> : <LaptopRes />}
        </div>
    </div>
  )
}

export default Header