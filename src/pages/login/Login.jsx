import React from 'react';
import { useNavigate } from "react-router-dom";
import LandingNavbar from './LandingNavbar';
import Donate from "../../media/donate.png"
import './Login.css';


const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div class="login_page">
        <LandingNavbar />
        <div class="login_main">
          <div class="login_text">
            <h1>Reduce your wastage</h1>
            <p>Lorem sodjosdjosjdLorem sodjosdjosjdLorem </p>
            <div class="py-5 d-flex">
              <button onClick={() => navigate('/aboutus')} class="get_started">Get Started</button>
            </div>  
            <div class="items_donated">
              <p>Items donated so far</p>
              <h1>40283</h1>
            </div>
          </div>
          <img src={Donate} alt=""></img>
        </div>
      </div>
    </>
  )
}

export default Login