import React, {useState} from 'react'
import "./ConversionMobileRes.css";
import { FaTwitter } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import MenuToggle from "./MenuToggle";
import {
  Link
} from "react-router-dom";

function MobileRes() {
    const [isOpen, setOpen] = useState(false);
  return ( 
    <div className='ConversionMobileHeaderContainer'>
    <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
    {!isOpen ? 
    null:
        <div className='ConversionMobileHeaderContainer_items'>
            <div className='ConversionMobileItems'>
            <Link className="conversionItems" to="/" smooth={true} duration={1000}><p>Home</p></Link>
            </div>
            <div className='ConversionMobileItems'>
            <Link className="conversionItems" to="/mint" smooth={true} duration={1000}><p>Mint</p></Link>
            </div>
            <div className='ConversionMobileItems'>
            <Link className="conversionItems" to="/decode" smooth={true} duration={1000}><p>Decode</p></Link>
            </div>
        </div>
     }
    </div>
  )
}

export default MobileRes