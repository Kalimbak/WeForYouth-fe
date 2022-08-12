import React from 'react';
import './sidebar.css';
import Logo from '../../assets/logo.svg';

const sidebar = () => {
  return (
    <div className="profile-left">
        <div className="profile-logo">
          <img src={Logo} alt="" />
        </div>
    </div>
  )
}
export default sidebar;