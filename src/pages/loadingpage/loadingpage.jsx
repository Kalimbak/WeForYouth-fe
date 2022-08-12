import {React, useEffect,useState} from 'react'
import ReactLoading from 'react-loading'
import './loadingpage.css'

import vector1 from '../../assets/vector1.svg'
import wefor from '../../assets/weforyouth .svg'
// import { useNavigate } from 'react-router-dom'

function loadingpage() {
  return (
    <div className='loadingpage'>
        <div className="vectortop">
            <img  className='logo' src={vector1} alt="" />
            <ReactLoading 
            type='Balls'
            color='#4387CA'
            />
        </div>
        <div className="weforyouth">
            <img src={wefor} alt="" />
        </div>
    </div>
  )
}

export default loadingpage
