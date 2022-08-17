import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Collect.css";

function Collect() {
    useEffect(()=>{
        AOS.init({duration: 2000});
      },[])
      return (
        <div id="collect" data-aos="fade-up"
        data-aos-duration="3000" className='collectContainer'>
        <div className='collectDivider'></div>
        <h1 data-aos="fade-up"
         data-aos-duration="3000" className='collectHeading'>THE COLLECTIVE</h1>
        <div className='collectParaOne'>
        <p data-aos="fade-up"
         data-aos-duration="3000" className='collectParaTwoText'>The collective is a vision of an exclusive community of creators and entrepreneurs learning to navigate the Web3 space and sharing our journey along the way to inspire each other with our endeavors.</p>
        </div>
        <div className='collectParaOne'>
        <p data-aos="fade-up"
         data-aos-duration="3000" className='collectParaTwoText'>We envision a community that understands the power of communication. A message can have a major impact. A few words of support can inspire an entrepreneur. A joke can brighten up someones day. A quote can change someones outlook on life.</p>
        </div>
        <div className='collectParaOne'>
        <p data-aos="fade-up"
         data-aos-duration="3000" className='collectParaTwoText'>We welcome creators from all backgrounds, ages, experiences and skills.
Together we will build something no other community has built.</p>
        </div>
        <div className='collectParaOne'>
        <p data-aos="fade-up"
         data-aos-duration="3000" className='collectParaTwoText end'>Let’s learn from each other’s success, failures, experiments and let’s grow together.</p>
        </div>
    
    </div>
      )
    }

export default Collect