import React from 'react'
import dabalash from '../../assets/dabalash_logo.webp';
import facebook from '../../assets/facebook.png';
import youtube from '../../assets/youtube.png';
import insta from '../../assets/insta.png';
import tiktok from '../../assets/tiktok.png';

function Header() {
  return (
    <div>
       <div className='container'>
           <div className='header-container'>
            <div className='social-icon'>
                <img src={facebook} alt=''/>
                <img src={youtube} alt=''/> 
                <img src={insta} alt=''/> 
                <img src={tiktok} alt=''/>
            </div>
              <img src={dabalash} alt='' />
           </div>
       </div>
    </div>
  )
}

export default Header


