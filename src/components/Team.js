import React, { useEffect } from 'react'
import Ithree from "./Ithree";
import Ifour from "./Ifour";
import Ifive from './Ifive';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Team.css";

function Team() {
  useEffect(()=>{
    AOS.init({duration: 2000});
  },[])
  return (
    <div id="team" className='teamContainer'>
    <div className='teamDivider'></div>
    <h1 data-aos="fade-up"
     data-aos-duration="3000" className='heading'>TEAM</h1>
    <div className='teaming'>
        <div data-aos="fade-up"
     data-aos-duration="3000" className='team'>
          <Ifive />
          <p className='teamText'>Developer</p>
        </div>
        <div data-aos="fade-up"
     data-aos-duration="3000" className='team'>
          <Ifour />
          <p className='teamText'>Founder</p>
        </div>
        <div data-aos="fade-up"
     data-aos-duration="3000" className='team'>
          <Ithree />
          <p className='teamText'>Artist</p>
        </div>
    </div>
</div>
  )
}

export default Team