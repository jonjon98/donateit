import React from 'react'
import Popup from '../../components/popup/Popup.jsx';
import { useState } from 'react';
import { db, auth } from '../../firebase';
import { Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react';
import { onSnapshot, orderBy, collection, query as fireQuery, where, addDoc, doc, Timestamp } from 'firebase/firestore';

const CreateListing = ({ searchType }) => {
  const currentUser = auth.currentUser.uid;  


  //handle popup
  const [isListingOpen, setIsListingOpen] = useState(false);
  const [listingSelected, setListingSelected] = useState({
    about: "",
    createdAt: "",
    desc: "",
    image: "",
    name: "",
    from: "",
  });

  const handleChange = (e) => {
    setListingSelected({ ...listingSelected, [e.target.name]: e.target.value });
  };
 
  const togglePopup = () => {
    setIsListingOpen(!isListingOpen);
  }

  const { about, createdAt, desc, image, name, from } = listingSelected;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setListingSelected({ ...listingSelected, error: null, loading: true });
    if (name === "" || about === "") {
      setListingSelected({ ...listingSelected, error: "All fields are required" });
    }
    try {
      await addDoc(collection(db, "posts"), {
        name,
        about,
        createdAt: Timestamp.fromDate(new Date()),
        desc,
        from: currentUser,
      });
      setListingSelected({
        about: "",
        createdAt: "",
        desc: "",
        image: "",
        name: "",
        from: "",
      });
    } catch (err) {
      setListingSelected({ ...listingSelected, error: err.message, loading: false });
    }
  }
  
  
  return (
    <div>
        <div>
          PLACEHOLDERDIV
          <button className="btn btn-dark" onClick={togglePopup}>Create</button>
        </div>
      {isListingOpen && <Popup
        content={
        <>
          <form onSubmit={handleSubmit}>
            <div className="input_container">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" value={name} onChange={handleChange} required="required"/>
            </div>
            <div className="input_container">
              <label htmlFor="name">About</label>
              <input type="text" name="about" value={about} onChange={handleChange} required="required"/>
            </div>
            <div className="input_container">
              <label htmlFor="name">Description</label>
              <input type="text" name="desc" value={desc} onChange={handleChange} required="required"/>
            </div>
            <button type="submit">Submit</button>
          </form>
        </>}
        handleClose={togglePopup}
      />}
    </div>
  )
}

export default CreateListing;