import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./conversionAbout.css";

function ConversionAbout() {
  useEffect(()=>{
    AOS.init({duration: 2000});
  },[])
  return (
    <div id="about" className='conversionAboutContainer '>
    <h1 data-aos="fade-up"
     data-aos-duration="3000" className='ConversionAboutContainerHeading'>Binary System</h1>
    <div className='ConversionAboutContainerPara'>
    <p data-aos="fade-up"
     data-aos-duration="3000" className='para'>As a base-2 numeral system, binary only consists of 0s and 1s. This is a positional system; every digit in a binary number is raised by power of 2, starting from the rightmost towards the left.</p>
    </div>
</div>
  )
}

export default ConversionAbout