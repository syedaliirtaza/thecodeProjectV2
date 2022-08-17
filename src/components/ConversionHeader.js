import React from 'react'
import {
    Link
  } from "react-router-dom";
import "./conversionHeader.css";

function ConversionHeader() {
  return (
    <div className='conversionHeaderContainer'>
        <div className='conversionHeaderHeading'>
            <h1 className='logoHeading'>THE CODE</h1>
        </div>
        <div className='conversionHeaderItems'>
            <p className='conversionHeaderPara'>
            <Link to="/" smooth={true} duration={1000}>Concept</Link>
            </p>
            {/* <p className='conversionHeaderPara'>
            <Link to='/' smooth={true} duration={1000}>Roadmap</Link>
            </p> */}
            <p className='conversionHeaderPara'>
            <Link to='/' smooth={true} duration={1000}>Team</Link>
            </p>
        </div>
    </div>
  )
}

export default ConversionHeader