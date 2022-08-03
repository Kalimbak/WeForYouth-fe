import React from 'react'
import Navbar from '../../components/Navbar/Navbar'

import './Home.css'

import FrameB from '../../assets/FrameB.svg'
import Music from '../../assets/music.jpg'

function Home() {
  return (
    <div className='Home'>
      <div className='navbar2'>
      <Navbar />
      </div>
      <div className='container'>
       <div className='A'>
          <div className='ecrit'>
            <div className='ecriture'>
              <div>
                 It's time for a <a> new </a>  way
                </div> 
              <div>
                to  <a> Connect </a>
              </div>
            </div>
            <div className="start">
                <p>Get Started</p>
            </div>
          </div>
          <div className='imageF'>
            <img src='' alt='Community'/>
          </div>
       </div>
       <div className='B'>
        <div><p>All Mentors</p></div>
        <div className='Men'>
          <div className='mentor'>
            <img src={Music} alt="photo M " />
            <span>Fatuma Usanase</span>
            <span>Consultant</span>
          </div>  
        </div>
        <div className="learn">Learn more</div>
       </div>
       <div className='C'>

       </div>
       <div className='D'>
        
       </div>
       <div className='E'>
        
       </div>
       <div className='F'>
        
       </div>
      </div>
    </div>
  )
}

export default Home
