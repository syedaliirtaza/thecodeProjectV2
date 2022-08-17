import React from 'react'
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import "./Social.css";

function Socials() {
  return (
    <div className='socialContainer'>
        <div className='socialOne'>
            <a href='https://twitter.com/TheCode_NFT'>
              <FaTwitter className='twitter'/>
            </a>
            
        </div>
        {/* <div className='text-[4em] group'>
            <FaDiscord className='group-hover:text-[#7DF842] cursor-pointer'/>
        </div> */}
    </div>
    
  )
}

export default Socials