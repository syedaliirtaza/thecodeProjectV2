import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Me.css"

function Me() {
  useEffect(()=>{
    AOS.init({duration: 2000});
  },[])
  return (
    <div id="me" data-aos="fade-up"
    data-aos-duration="3000" className='meContainer'>
    <div className='meDivider'></div>
    <h1 data-aos="fade-up"
     data-aos-duration="3000" className='heading'>About Me, Myself & I</h1>
    <div className='meParaOne'>
    <p data-aos="fade-up"
     data-aos-duration="3000" className='paraTwoText'>Hello frens, you can call me Raafi. I am a 23 year old self taught developer & a fellow degen. I've been rugged, hacked, locked out of my wallets and minted far too many Ape projects than I care to admit but from my time in this space I have gained something far more valuable compared to what I have lost in ETH, I have found my people.</p>
    </div>
    <div className='meParaTwo meParaOne'>
    <p data-aos="fade-up"
     data-aos-duration="3000" className='twoText'>I've been through all the phases of the NFT right of passage:<br />
    Denial - Thinking NFTs are just a fad.<br />
    Rugged - Believing them when they said they were "building".<br />
    FOMO - Minting anything and everything that got shilled to me.<br />
    Grind - Mindlessly grinding for ape derivative whitelists.<br />
    Greed - Minting only to make profits.<br />
   
    Enlightenment - Truly understanding the beginning of web 3.0.</p>
    </div>
    <div className='meParaOne'>
    <p data-aos="fade-up"
     data-aos-duration="3000" className='paraTwoText'>What I've come to understand is that Web 3 is so much more than NFTs which are so much more than just PFPs. Yes, PFPs are great but aren't you tired of grinding for whitelist and aping into an Ape PFP only to wake up to another Ape minting?</p>
    </div>
    <div className='meParaOne'>
    <p data-aos="fade-up"
     data-aos-duration="3000" className='white paraTwoText'>This is not another PFP project.</p>
    </div>
    <div className='meParaOne'>
    <p data-aos="fade-up"
     data-aos-duration="3000" className='white paraTwoText'>This is more.</p>
    </div>

</div>
  )
}

export default Me