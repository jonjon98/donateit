import React from 'react'
import { db } from '../../firebase';
import { getAuth } from "firebase/auth";
import { useState } from 'react';
import Popup from '../../components/popup/Popup.jsx';
import { Button, Collapse, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from '../../components/navbar/NavigationBar';
import { onSnapshot, orderBy, collection, query as fireQuery, where } from 'firebase/firestore';
import './Profile.css';

const Profile = () => {

  const auth = getAuth();
  const user = auth.currentUser; 

  const [openPosts, setOpenPosts] = useState(false);
  const [openListings, setOpenListings] = useState(false);
  const [elements, setElements] = useState([]);
  const [isOpen, setIsOpen] = useState();
  const [elementSelected, setElementSelected] = useState({
    about: "",
    createdAt: "",
    desc: "",
    image: "",
    name: "",
    from: "",
  });

  const q = fireQuery(collection(db, "posts"), orderBy("createdAt", "asc"), where("from", "==" , user.uid));
  onSnapshot(q, (querySnapshot) => {
    let elm = [];
    querySnapshot.forEach((doc) => {
      elm.push(doc.data());
    })
    setElements(elm);
  })

  const togglePopup = (element) => {
    setElementSelected(element);
    setIsOpen(!isOpen);
  }  

  return (
  <div className="profile_container">
    <NavigationBar></NavigationBar>
    <div className='profile_div'>
      <p> 
        Name: {user.displayName}
      </p>
      <p>
        Email: {user.email}
      </p>
      <p>
        Points: {user.points}
      </p>
      {/* User's Posts */}
      <Button
          className="btn-dark my-3"
          onClick={() => setOpenPosts(!openPosts)}
          aria-controls="example-collapse-text"
          aria-expanded={openPosts}
        >
          Posts
        </Button>
        <Collapse in={openPosts}>
          <div id="example-collapse-text">
          <ul>
            {elements?.map(element => (
              <li className="d-inline-flex p-2 bd-highlight" key={element.id}>
                <Card style={{color: "#000000"}}>
                  <Card.Img/>
                  <Card.Body>
                    <Card.Title>
                      {element.name}
                    </Card.Title>
                    <Card.Text>
                      {element.desc}
                    </Card.Text>
                    <Button variant="primary" onClick={()=>togglePopup(element)}>Read More</Button>
                  </Card.Body>
                </Card>
              </li>
            ))}          
          </ul>
          {isOpen && <Popup
            content={
            <>
              <h1 className="font-weight-bold">{elementSelected.name}</h1>
                <p>{elementSelected.about}</p>
                <p>{new Date(elementSelected.createdAt.seconds * 1000).toLocaleDateString("en-US")}</p>
                <div>
                  <img alt="img" width="400" height="500" src={elementSelected.image}></img>
                </div>
            </>}
            handleClose={togglePopup}
          />}
        </div>
        </Collapse>
        <br />

        {/* User's Listings */}
        <Button
          className="btn-dark my-3"
          onClick={() => setOpenListings(!openListings)}
          aria-controls="example-collapse-text"
          aria-expanded={openListings}
        >
          Listings
        </Button>
        <Collapse in={openListings}>
          <div id="example-collapse-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Collapse>
    </div>
   </div>
  );
}

export default Profile