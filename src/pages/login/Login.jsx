import React, { useState } from 'react';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, Timestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import LandingNavbar from './LandingNavbar';
import { Container } from 'react-bootstrap';


const Login = () => {
  return (
    <>
      <div class="flex flex-grow-1">
        <LandingNavbar />
        <Container class="p-3 mb-2 bg-dark text-white">
          Login
        </Container>
      </div>
    </>
  )
}

export default Login