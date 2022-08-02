import React, { useState } from "react";
import Logo from "../../assets/Vector.png";
import { BiArrowBack } from "react-icons/bi";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState("");

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword((value) => !value);
  };
  return (
    <div className="login">
      <div className="leftside">
        <div className="logos">
          <img src={Logo} alt="" />
          <p className="logo">
            We<span>for</span>youth
          </p>
        </div>
      </div>
      <div className="rightside">
        <div className="top">
          <div className="back">
            {/* <img src={Back} alt="" /> */}
            <Link to="/" className="bck">
              {" "}
              <BiArrowBack />
            </Link>
          </div>
          <div className="forget">
            <p>
              Not a member?{" "}
              <Link to="/Signup" className="link">
                <span>Sign up now</span>
              </Link>
            </p>
          </div>
        </div>
        <form action="">
          <div className="form">
            <div className="intro">
              Sign In To WE<span>FOR</span>YOUTH
            </div>
         
            <div className="log">
              <div className="name">
                <h5>Username & Email Address</h5>
                <input name="username" className="input" />
              </div>
              <div className="name">
                <h4>Password</h4>
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
                />
              </div>
            </div>
            <div className="done">Forgot Password?</div>
          </div>
          <div className="sign">
            <Link to="/">
              {" "}
              <button>Sign In</button>{" "}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
