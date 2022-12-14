import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import data from '../../data/dataHomep.json'
import Content from '../../data/comment.json'


import './Home.css'

import Together from '../../assets/together.jpg'
import Ellipse from '../../assets/ellipse.svg'
// import Clarity from '../../assets/clarity.svg'
import Quote from '../../assets/quote.svg'
import Pro from '../../assets/images.jpeg'
import Facebook from '../../assets/facebook.svg'
import Twitter from '../../assets/twitter.svg'
import Linkedin from '../../assets/linkedin.svg'
import Footer from '../../components/footer/Footer'

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
                <div className='ecriture-top'>
                  It's time for a new way <br/> <font color="#0A66C2"> Connect </font>
                </div> 
            </div>
            <div className="start">
              <p>Get Started</p>
            </div>
          </div>
          <div className='imageF'>
            <img src={Ellipse} alt='Community'/>
          </div>
       </div>
       <div className='C'>
          <div className="C-left-side">
           <div className="left-side-1">
              <div className="left-side-1-top">Why us? <font color="#0A66C2">A fresh new perspective </font></div>
           </div>
           <div className="left-side-2">
              <p>When you&rsquo;re ready to engage with community ,the quality of your experience counts.</p>
           </div>
           <div className='left-side-3'>
            {Content.choose_us.map(datas=>{
              return(
                <div className="left-side-3-box1" key={datas.id}>
                  <div className="box-left">
                    <img src={datas.img} alt="" />
                  </div>
                  <div className="box-right">
                    <p>{datas.title}</p>
                    <span>{datas.comment}</span>
                  </div>
              </div>
              )
            })}
           </div>
          </div>
          <div className="C-right-side">
            <img src={Together} alt="" />
          </div>
       </div>
       <div className='B'>
        <div className='B-mentors'>All Mentors</div>
        <div className='Men'>
           {
            data.map( datas=> {
                return(
                  <div className='mentor' key={datas.id}>
                    <img src={datas.image} alt="" />
                    <p>{datas.Nom}</p>
                    <span>{datas.Occupation}</span>
                  </div>
                )
            })
           }
        </div>
        <div className="learn">Learn more</div>
       </div>
       <div className='D'>
        <div className="D-header">
          <p>What do people think of us</p>
        </div>
        <div className="D-testimony">
           {
            Content.Data_comment.map(Data =>{
              return(
                <div className="testimony-box" key={Data.id}>
            <div className='Quote'>
              <img src={Quote} alt="" />
            </div>
            <div className="box-top">
              <div className="top-title">
                <p>{Data.title}</p>
              </div>
              <div className="top-body">
                <p>{Data.body}</p>
              </div>
            </div>
            <div className="box-bottom-person">
              <div className="perso-img">
                <img src={Pro} alt="igperso" />
              </div>
              <div className="info-perso">
                <div className="perso-name">
                  <p>{Data.name}</p>
                </div>
                <div className="perso-name-t">
                  <span>{Data.function}</span>
                </div>
              </div>
            </div>
          </div>
              )
            })
           }
        </div>
       </div>
       <div className='E'>
           <div className="E-top-part">
            <div className="part-box-1">
              <div className="box-1-left">
                <p>Stay connect with us WE<font color="#0A66C2">FOR</font>YOUTH</p>
              </div>
              <div className="box-1-right">
               <a href="http://"> <img src={Linkedin} alt="q" /></a>
               <a href="http://"><img src={Twitter} alt="b" /></a>
               <a href="http://"><img src={Facebook} alt="c" /></a>
              </div>
            </div>
            <div className="part-box-2">
              <div className="box-2-left">
              <ul>
                  <li>Our Community</li>
                  <li>Our Mentor</li>
                  <li>About Us</li>
                </ul>
              </div>
              <div className="box-2-right">
                <input type="text" placeholder='Enter your E-mail'/>
                <span>Send</span>
              </div>
            </div>
           </div>
           <div className="E-end-part">
            <p>We Care for you, we are here for you.</p>
           </div>
       </div>
       <Footer />
      </div>
    </div>
  )
}

export default Home
