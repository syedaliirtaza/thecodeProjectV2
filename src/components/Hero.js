import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Hero.css";

function Hero() {
  useEffect(()=>{
    AOS.init({duration: 2000});
  },[])
  return (
    <div className='heroContainer '>
     <div className='heroPara '>
     <p className='paragraph'>
     <span>The Code</span> is a first of its kind NFT collection of <span>encrypted messages</span> to be <span>decrypted</span> by <span>you</span> on the Ethereum blockchain.
     </p>
     </div>
        <div className='heroParaTwo '>
          
          <p  className='paragraphTwo'>Designed to evoke <span >emotion</span>. To make you <span >happy</span>, <span >inspired</span>, <span>nostalgic</span> or even <span>surprised</span>.</p>
          <p className='paragraphTwo'>This NFT <span>speaks to you</span>, it speaks <span>for you</span>, it speaks <span>for itself</span>, it is open to interpretation. Never be <span>speechless</span> with this in your wallet.</p>
          <p   className='paragraphTwo'>Each piece is completely <span >unique</span>, just like you.</p>
          <p  className='paragraphTwo'>This collection is inspired by <span >you</span>,
              everyday things throughout my <span >life</span> & yours.
              Our <span >family</span>, our <span >friends</span>, our ​acquaintances.
              Our favourite memes, movies, TV shows, games,<br/> anime, celebrities, other things <span >pop culture</span>.
              And of course, the collective <span >NFT community</span>.</p>
      </div>
    </div>
  )
}

export default Hero