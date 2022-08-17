import React from 'react'
import "./ConversionHeader.css";
import { FaTwitter } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import LaptopRes from './ConversionLaptop/ConversionLaptopRes';
import MobileRes from "./ConversionMobile/ConversionMobileRes";
import { useMediaQuery } from "react-responsive";
import {Link} from "react-router-dom";

function Header() {
    
    const isMobile = useMediaQuery({ maxWidth: 780 });
  
    return (
    <div className='ConversionHeaderContainer'>
        <div className='ConversionHeaderContainer_logo'>
            <h1 className='conversionLogo_heading'>THE CODE</h1>
        </div>
        <div className='headerContainer'>
            {isMobile ? <MobileRes /> : <LaptopRes />}
        </div>
    </div>
  )
}

export default Header