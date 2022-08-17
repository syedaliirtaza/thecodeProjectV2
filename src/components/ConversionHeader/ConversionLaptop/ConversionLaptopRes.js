import React from 'react'
import "./ConversionLaptopRes.css";
import {
  Link
} from "react-router-dom";

function LaptopRes() {
  return (
    <div className='ConversionHeaderContainer_items'>
        <div className='conversionItems'>
                <Link className="conversionItems" to="/" smooth={true} duration={1000}><p>Home</p></Link>
            </div>
            <div className='conversionItems'>
            <Link className="conversionItems" to="/mint" smooth={true} duration={1000}><p>Mint</p></Link>
            </div>
            <div className='conversionItems'>
            <Link className="conversionItems" to="/decode" smooth={true} duration={1000}><p>Decode</p></Link>
            </div>
    </div>
  )
}

export default LaptopRes