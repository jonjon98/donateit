import React from 'react'
import SearchBar from './SearchBar.jsx'
import Popup from '../popup/Popup.jsx';
import { useState } from 'react';
import { db } from '../../firebase';
import { Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react';
import { onSnapshot, orderBy, collection, query as fireQuery } from 'firebase/firestore';

const Search = ({ searchType }) => {
  //handle data extraction from DB
  const [elements, setElements] = useState([]);
  useEffect(() => {
    if(searchType === "posts"){
      //placeholder for the posts, have to extract from DB
        const q = fireQuery(collection(db, "posts"), orderBy("createdAt", "asc"));

        onSnapshot(q, (querySnapshot) => {
          let elm = [];
          querySnapshot.forEach((doc) => {
            elm.push(doc.data());
          })
          setElements(elm);
        })
    }
    else if(searchType === "items"){
      //placeholder for the posts, have to extract from DB
      const q = fireQuery(collection(db, "items"), orderBy("createdAt", "asc"));

      onSnapshot(q, (querySnapshot) => {
        let elm = [];
        querySnapshot.forEach((doc) => {
          elm.push(doc.data());
        })
        setElements(elm);
      })
    } 
  })

  //handle searching algorithm
  const filterElements = (elements, query) => {
    if (!query) {
        return elements;
    }

    return elements.filter((elements) => {
        const elementsName = elements.name.toLowerCase();
        return elementsName.includes(query);
    });
  };

  const { search } = window.location;
  const query = new URLSearchParams(search).get('search');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredElements = filterElements(elements, searchQuery);

  //handle popup
  const [isOpen, setIsOpen] = useState(false);
  const [elementSelected, setElementSelected] = useState({
    about: "",
    createdAt: "",
    desc: "",
    image: "",
    name: "",
    from: "",
  });
 
  const togglePopup = (element) => {
    setElementSelected(element);
    setIsOpen(!isOpen);
  }
  
  return (
    <div>
      <SearchBar  
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}               
      />
      <ul>
        {filteredElements.map(element => (
          <li className="d-inline-flex p-2 bd-highlight" key={element.id}>
            <Card style={{color: "#000000"}}>
              {element.image ? <Card.Img src={element.image} alt={element.text} /> :null}
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
        content={<>
          <b>{elementSelected.name}</b>
            <p>{elementSelected.about}</p>
            <p>{new Date(elementSelected.createdAt.seconds * 1000).toLocaleDateString("en-US")}</p>
            {elementSelected.image ? <Card.Img src={elementSelected.image} alt={elementSelected.text} /> :null}
          <button>Upvote</button>
        </>}
        handleClose={togglePopup}
      />}
    </div>
  )
}

export default Search