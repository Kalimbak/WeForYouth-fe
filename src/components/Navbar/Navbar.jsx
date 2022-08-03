import React from 'react'
import {NavLink as Link} from 'react-router-dom'

import './Navbar.css'

import Logo from '../../assets/logo.svg'
import Account from '../../assets/account.svg'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="logo">
          <Link to='/'> <img src={Logo} alt="Logo" /></Link>
      </div>
      <div className="navigations">
          <div className="menu">
            <div activeclassname="Home">
                <Link className='route' to="/">Home</Link>
            </div>
            <div className='mentors'>
                <Link className='route' to="/">Mentors</Link>
            </div>
            <div className='Community'>
                <Link className='route' to="/">Community</Link>
            </div>
            <div className='About'>
                <Link className='route' to="/">About us</Link>
            </div>
          </div>
      </div>
      <div className="navigation">
            <div className='list'>
              <select name="translate" id="">
                <option value="French">French</option>
                <option value="English">English</option>
              </select>
              </div>
            <div className='log'>
              <Link className='rout'to="/Login"><img src={Account} alt='avatar'/> Login</Link>
            </div>
            <div className='sign'>
              <Link className='route1'to="/Signup">Sign up</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar