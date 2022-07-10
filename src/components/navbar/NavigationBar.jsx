import React, { createContext } from "react";
import { auth, db } from "../../firebase";
import { signOut } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import LogoDark from '../../media/logodark.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavigationBar.css';

export const ThemeContext = createContext(null);

const NavigationBar = (props) => {
  const navigate = useNavigate();
  
  const handleSignout = async () => {
    await updateDoc(doc(db, "users", auth.currentUser.uid), {
      isOnline: false,
    });
    await signOut(auth);
    navigate("/login");
  };

  return (
    <>
      <Navbar>
      <Container className="d-flex">
        <div className="text-decoration-none d-flex flex-direction-row">
          <Navbar.Brand href="/">
            <img
              src={LogoDark}
              width="50"
              height="50"
              alt="Logo"
              className="mt-5"
            />
          </Navbar.Brand>
          <div className="font-weight-light display-6 py-5">DonateIt</div>
        </div>
        <div className="navigation">
          <a className="nav_link" href="/">Home</a>
          <a className="nav_link" href="/rewards">Rewards</a>
          <a className="nav_link" href="/listing">Products</a>
          <a className="nav_link" href="/profile">Profile</a>
          <button onClick={handleSignout} className="btn btn-dark">Logout</button>
        </div>
      </Container>
      </Navbar>
      <br />
    </>
  );
};

export default NavigationBar;