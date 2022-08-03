import React, {useState} from 'react'
import Logo from "../../assets/Vector.png";
import { BiArrowBack } from "react-icons/bi";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import "./signup.css"
// import AiOutlineDown 

function Signup() {
  const [showPassword, setShowPassword] = useState("")

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword((value) => !value);
  };
  return (
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
        <form action="">
          <div className="form">
            <div className="intro">
              Sign Up To WE<span>FOR</span>YOUTH
            </div>
         
            <div className="log">
              <div className="users">
                
              <div className="name">
                <h4 id='username1'>Email</h4>
        

                <input
                  // id="pasword-field"
                  // type={showPassword ? "text" : "password"}
                  name="password"
                  className="input1"
                />
              </div>
              <div className="name" id='name'>
                <h4 id='username'>Email</h4>
        

                <input
                  // id="pasword-field"
                  // type={showPassword ? "text" : "password"}
                  name="password"
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
            <Link to="/">
              {" "}
              <button>Create Account</button>{" "}
            </Link>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Signup
