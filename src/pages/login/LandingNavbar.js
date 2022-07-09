import React, { useContext, createContext, useState } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { updateDoc, doc, setDoc, Timestamp } from "firebase/firestore";
import { AuthContext } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import Logo from '../../media/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ThemeContext = createContext(null);

const LandingNavbar = (props) => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    error: null,
    loading: false,
  });

  const { error, loading } = data;

  const handleGoogle = async (provider) => {
    setData({ ...data, error: null, loading: true });
    signInWithPopup(auth, provider)
      .then(async (res) => {
        console.log(res.user);
        await setDoc(doc(db, "users", res.user.uid), {
          uid: res.user.uid,
          name: res.user.displayName,
          email: res.user.email,
          createdAt: Timestamp.fromDate(new Date()),
          isOnline: true,
        });
        setData({
          error: null,
          loading: false,
        })
      navigate("/", { replace: true });
      }
    ).catch((err) => {
      setData({ ...data, error: err.message, loading: false });
    })
  };

  return (
    <>
      <Navbar bg="dark">
      <Container>
        <Navbar.Brand href="/login" class="align-items-center justify-content-center text-white text-decoration-none d-flex flex-direction-row">
          <img
            src={Logo}
            width="70"
            height="70"
            class="d-inline-block align-top"
            alt="Logo"
          />
          <div class="text-white font-weight-light display-6 p-5">DonateIt</div>
        </Navbar.Brand>
        <div class="d-flex ">
          <li class="nav-item">
            <a class="nav-link" href="/login">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/faq">FAQs</a>
          </li>
          <button type="button" class="btn btn-light btn-lg rounded" onClick={() => handleGoogle(new GoogleAuthProvider())}>
              {loading ? "Logging in ..." : "Login"}
          </button>
        </div>
      </Container>
      </Navbar>
      <br />
    </>
  );
};

export default LandingNavbar;