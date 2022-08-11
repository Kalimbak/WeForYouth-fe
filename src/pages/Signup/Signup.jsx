import React, {useState} from 'react'
import Logo from "../../assets/Vector.png";
import { BiArrowBack } from "react-icons/bi";
import * as AiIcons from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css"
import { UserRepositoryImpl } from '../../data/repository/user-repository';
import checkPassword from "../../utils/check-password";
import getFormData from "../../utils/get-form-data";
// import {RegisterUserFormData} from "../../data/models/types";
// import AiOutlineDown 

function Signup() {
  const userRepository = new UserRepositoryImpl(checkPassword);
  const [showPassword, setShowPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword((value) => !value);
  };
  /**
   * 
   * @param {Event} evt 
   */
  const submitUserData = async (evt)=>{
    evt.preventDefault();
    /**
     * @type {HTMLFormElement}
     */
    const form = evt.target;
    /**
     * @type {RegisterUserFormData}
     */
    const formData = getFormData(form);
    console.log(formData);
    setIsLoading(true);
    const resp = await userRepository.registerUser(formData);
    setIsLoading(false);
    if(resp == false){
      navigate("/");
    }
  }
  return (
    isLoading ? <h1>Is loading</h1> :
    <div className='first'>
         <div className="leftsides">
        <div className="logos">
          <img src={Logo} alt="" />
          <p className="logo">
            We<span>for</span>youth
          </p>
        </div>
      </div>
      <div className="otherside">
        <div className="top">
        <div className="back">
            {/* <img src={Back} alt="" /> */}
            <Link to="/Login" className="bck">
              {" "}
              <BiArrowBack />
            </Link>
          </div>
          <div className="remember">
            <p>
              ~Already have an account?{" "}
              <Link to="/Signup" className="link">
                <span>Sign in </span>
              </Link>
            </p>
          </div>
        </div>
        <form onSubmit={submitUserData} action="">
          <div className="form">
            <div className="intro">
              Sign Up To WE<span>FOR</span>YOUTH
            </div>
         
            <div className="log">
              <div className="users">
                
              <div className="name">
                <h4 id='username1'>Name</h4>
        

                <input
                  // id="pasword-field"
                  // type={showPassword ? "text" : "password"}
                  name="name"
                  className="input1"
                />
              </div>
              <div className="name" id='name'>
                <h4 id='username'>Username</h4>
        

                <input
                  // id="pasword-field"
                  // type={showPassword ? "text" : "password"}
                  name="username"
                  className="input1"
                />
              </div>
                
              </div>
              <div className="Name">
              <div className="name">
                <h4 id='selector'>Select Community</h4>
                <select
                  
                  name="password"
                  className="select"
                  id='input'

                />
              </div>
            <div className="name">
                <h4 id='selector'>Gender</h4>
              

                <select
                  name="password"
                  className="input"
                  id='input'
                />
              </div>
              <div className="name">
                <h4 id='selector'>Age</h4>
               

                <select

                  name="password"
                  className="select"
                  id='input'

                />
              </div>
              <div className="name">
                <h4 id='selector'>Email</h4>
        

                <input
                  // id="pasword-field"
                  // type={showPassword ? "text" : "password"}
                  name="password"
                  className="input"
                  id='input'

                />
              </div>
              
              <div className="name">
                <h4 id='selector'>Password</h4>
                {showPassword ? (
                  <div className="icon">
                    <AiIcons.AiOutlineEye
                      id="eyeOne"
                      onClick={handleShowPassword}
                    />
                  </div>
                ) : (
                  <div className="icon">
                    <AiIcons.AiOutlineEyeInvisible
                      id="eyeTwo"
                      onClick={handleShowPassword}
                    />
                  </div>
                )}

                <input
                  // id="pasword-field"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input"
                  id='input'

                />
              </div>
              <div className="name">
                <h4 id='selector'>Confirm Password</h4>
                {showPassword ? (
                  <div className="icon">
                    <AiIcons.AiOutlineEye
                      id="eyeOne"
                      onClick={handleShowPassword}
                    />
                  </div>
                ) : (
                  <div className="icon">
                    <AiIcons.AiOutlineEyeInvisible
                      id="eyeTwo"
                      onClick={handleShowPassword}
                    />
                  </div>
                )}

                <input
                  // id="pasword-field"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input"
                  id='input'

                />
              </div>
            </div>
            <div className="done"> <Link to="/reset" className="reset"> Forgot Password?</Link></div>
            </div>
          </div>
          <div className="sign">
              <button type='submit'>Create Account</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Signup
