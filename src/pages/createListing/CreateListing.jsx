import React from 'react'
import Popup from '../../components/popup/Popup.jsx';
import { useState } from 'react';
import { db, auth, storage } from '../../firebase';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import './CreateListing.css';

const CreateListing = ({ searchType }) => {
  const currentUser = auth.currentUser.uid;  
  const [img, setImg] = useState();
  const [isListingOpen, setIsListingOpen] = useState(false);
  const [listingSelected, setListingSelected] = useState({
    about: "",
    createdAt: "",
    desc: "",
    image: "",
    name: "",
    from: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setListingSelected({ ...listingSelected, [e.target.name]: e.target.value });
  };
 
  const togglePopup = () => {
    setIsListingOpen(!isListingOpen);
  }

  const { about, desc, name } = listingSelected;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setListingSelected({ ...listingSelected, error: null, loading: true });
    if (name === "" || about === "") {
      setListingSelected({ ...listingSelected, error: "All fields are required" });
    }
    try {
      let url;
      if (img) {
        const imgRef = ref(
          storage,
          `images/${new Date().getTime()} - ${img.name}`
        );
        const snap = await uploadBytes(imgRef, img);
        const dlUrl = await getDownloadURL(ref(storage, snap.ref.fullPath));
        url = dlUrl;
      }

      await addDoc(collection(db, "posts"), {
        name,
        about,
        createdAt: Timestamp.fromDate(new Date()),
        desc,
        image: url || "",
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
      setImg("");
      navigate('/createListing');
    } catch (err) {
      setListingSelected({ ...listingSelected, error: err.message, loading: false });
    }
  }
  
  
  return (
    <div className="box">
        <div>
          <button className="btn btn-dark" onClick={togglePopup}>Create</button>
        </div>
      {isListingOpen && <Popup
        content={
        <div className="form_contents">
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
            <input
            onChange={(e) => setImg(e.target.files[0])}
            type="file"
            id="img"
            accept="image/*" />
            <div className="button_container">
              <button type="submit" >Submit</button>
            </div>
          </form>
        </ div>}
        handleClose={togglePopup}
      />}
    </div>
  )
}

export default CreateListing;