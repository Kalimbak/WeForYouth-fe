import React from 'react'

import { Link } from 'react-router-dom'

import './profile.css'
import Sidebar from '../../components/sidebar/sidebar'
// import Logo from '../../assets/logo.svg'
import Arrow from '../../assets/arrow-line.svg'

function Profile() {
  return (
    <div className='profile'>
      <Sidebar />
      <div className='profile-right'>
        <div className="back-btn">
          <Link to='/signup'>
        <img src={Arrow} alt="" />
        </Link>
        </div>
        <div className="profile-right-wel">
          <p>Welcome! Let&rsquo;s create your profile</p>
        </div>
        <div className="right-wel-btm">
          <p>Let&rsquo;s others get to know you better! you can do these later</p>
        </div>
        <form className='formul'>
        <div className="right-avatar">
          <p>Add an Avatar</p>
        </div>
        <div className="right-img-avatar">
            <img src="" alt="choose your avatar" />
          <div className="right-picture-choose">
            <button className="choose" type=''>
              Choose Avatar
            </button>
            <button className='choosen' type=''> Choose one our default</button>
          </div>
        </div>
        <div className="right-add-community">
          <p>Add your bio</p>
          <input type="text" placeholder='Enter the community you&rsquo;re joining' />
        </div>
        <div className='save-form'>
          <button className='saver' type='submit'>Save</button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Profile