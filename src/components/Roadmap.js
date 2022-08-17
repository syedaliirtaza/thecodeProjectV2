import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Roadmap.css"

function Roadmap() {
    useEffect(()=>{
        AOS.init({duration: 2000});
      },[])
  return (
    <div id="roadmap" className='roadmapContainer'>
    <div className='roadmapDivider'></div>
    <div>
        <h1 data-aos="fade-up"
        data-aos-duration="3000" className='heading'>Roadmap</h1>
     </div>
    <div className='roadmap'>
    <div data-aos="fade-up"
     data-aos-duration="3000" className='roadmapPoint'>
        <div><p>20%</p></div>
        <div className='point'><p>I do a happy little dance.</p></div>
    </div>
    <div data-aos="fade-up"
     data-aos-duration="3000" className='roadmapPoint'>
        <div><p>40%</p></div>
        <div className='point'><p>We make this project carbon positive.</p></div>
    </div>
    <div data-aos="fade-up"
     data-aos-duration="3000" className='roadmapPoint'>
        <div><p>60%</p></div>
        <div className='point'><p>Private Discord.</p></div>
    </div>
    <div data-aos="fade-up"
     data-aos-duration="3000" className='roadmapPoint'>
        <div ><p>80%</p></div>
        <div className='point'><p>Community giveaway.</p></div>
    </div>
    <div data-aos="fade-up"
     data-aos-duration="3000" className='roadmapPoint'>
        <div><p>100%</p></div>
        <div className='point'><p><span>A Surprise</span>.</p></div>
    </div>
    </div>
</div>
  )
}

export default Roadmap