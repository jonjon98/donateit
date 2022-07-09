import React, { createContext, useState } from "react";
import { auth, db } from "../../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore";
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

  const { loading } = data;

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
      <Navbar>
      <Container className="d-flex">
        <div className="text-white text-decoration-none d-flex flex-direction-row">
          <Navbar.Brand href="/login">
            <img
              src={Logo}
              width="50"
              height="50"
              alt="Logo"
              className="mt-5"
            />
          </Navbar.Brand>
          <div className="text-white font-weight-light display-6 py-5">DonateIt</div>
        </div>
        <div className="login_links">
          <a className="login_link" href="/login">Home</a>
          <a className="login_link" href="/aboutus">About</a>
          <a className="login_link" href="/faq">FAQs</a>
          <button type="button" className="login_button" onClick={() => handleGoogle(new GoogleAuthProvider())}>
              {loading ? "Loading ..." : "Login"}
          </button>
        </div>
      </Container>
      </Navbar>
      <br />
    </>
  );
};

export default LandingNavbar;