import React from 'react';
import { useNavigate } from "react-router-dom";
import LandingNavbar from './LandingNavbar';
import Donate from "../../media/donate.png"
import './Login.css';


const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="login_page">
        <div className="navbar_div">
          <LandingNavbar />
        </div>
        <div className="login_main">
          <div className="login_text">
            <h1>Reduce your wastage</h1>
            <p>Use this as a platform to recyle more, and use your points to buy and sell used goods.</p>
            <div className="py-5 d-flex">
              <button onClick={() => navigate('/aboutus')} className="get_started">Get Started</button>
            </div>  
            <div className="items_donated">
              <p>Items donated so far</p>
              <h1>40,283</h1>
            </div>
          </div>
          <img src={Donate} alt=""></img>
        </div>
      </div>
    </>
  )
}

export default Login