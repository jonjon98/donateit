import React from 'react'
import { auth, db } from "../../firebase";
import { signOut } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Search from '../../components/search/Search.jsx'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => {
  const navigate = useNavigate()

  const handleSignout = async () => {
    await updateDoc(doc(db, "users", auth.currentUser.uid), {
      isOnline: false,
    });
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div>
      <Container className="py-3">
        <button onClick={handleSignout} class="btn">Logout</button>
        <p className="font-weight-bold">Bold text.</p>
        <Search searchType="posts"/>
      </Container>
    </div>
  )
}

export default Home