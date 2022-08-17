import React, { useEffect } from 'react'
import Iconone from './Iconone'
import Icontwo from './Icontwo'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Link
} from "react-router-dom";
import "./About.css";


function About() {
  useEffect(()=>{
    AOS.init({duration: 2000});
  },[])
  return (
    <div id="about" className='aboutContainer '>
     <div className='divider'></div>
     <div className='aboutContainerHeading'>
        <h1  data-aos="fade-up"
        data-aos-duration="3000" className='heading '>THE CONCEPT</h1>
     </div>
    <div className='aboutContainerPara'>
        <p data-aos="fade-up"
        data-aos-duration="3000" className='para'>Is there anything more beautiful than self-expression?</p>
        <p data-aos="fade-up"
        data-aos-duration="3000" className='para'>We Read. We Learn. We Write. We Grow.</p>
        <p data-aos="fade-up"
        data-aos-duration="3000" className='para'>It's all language.</p>
        <p data-aos="fade-up"
        data-aos-duration="3000" className='para'>Who would have thought a language of 0s and 1s would run the world today.</p>
        <p data-aos="fade-up"
        data-aos-duration="3000" className='para'>Whether you're a techie or a newcomer in this space, the fact that you're here, means you understand the importance and impact of technology. Our devices are constantly speaking their language, so take this opportunity to understand the language of your device.</p>
    </div>
    <div className='aboutContainerDialouge'>
        <p data-aos="fade-up"
        data-aos-duration="3000" className='dialouge'>Step 1: Mint your code.<br />
          Step 2: Use the <Link className="conversion" to="/conversion">conversion</Link> to decrypt your coded message.<br />
          Step 3: Be surprised at what you find out.<br />
          Step 4: Burn the coded and mint the decoded NFT (optional).<br />
          Step 5: Chill out in the discord and wait for what's next.</p>
    </div>
    <div className='aboutContainerImage'>
        <div data-aos="fade-up"
            data-aos-duration="3000" className='image'>
          <p className='text-white'>Binary</p>
          <Iconone />
        </div>
        <div data-aos="fade-up"
            data-aos-duration="3000" className='imageTwo'>
          <p  className='imageText '>English</p>
          <Icontwo />
        </div>   
    </div>
</div>
  )
}

export default About