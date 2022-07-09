import React from 'react'
import SearchBar from './SearchBar.jsx'
import Popup from '../popup/Popup.jsx';
import { useState } from 'react';
import { db } from '../../firebase';
import { Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react';
import { onSnapshot, orderBy, collection, query as fireQuery } from 'firebase/firestore';
import './Search.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Form, Image} from 'react-bootstrap'
import pic1 from './faith-yarn-Wr0TpKqf26s-unsplash.jpg'
import pic2 from './haryo-setyadi-acn5ERAeSb4-unsplash.jpg'
import pic3 from './ryan-hoffman-6Nub980bI3I-unsplash.jpg'
import pic4 from './icon.png'

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
              <Card.Img />
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
          <div className="maincontainer">
            <Container>
              <Row></Row>
              <Row>
                <Col><Image src={pic1} fluid></Image></Col>
                <Col><Image src={pic2} fluid></Image></Col>
                <Col><Image src={pic3} fluid></Image></Col>
              </Row>
              <Row className='align-items-center'>
                <Col sm={8}>
                  {elementSelected.about}
                  {elementSelected.desc}
                </Col>
                <Col sm={4}>
                  <Row><Button variant='outline-secondary' style={{maxwidth:'50%', margin:'20px', marginBottom:'20px'}}>
                  <Image src={pic4} fluid width={50} style={{marginRight:'20px'}}></Image>
                  {elementSelected.createdBy}
                  </Button>{' '}</Row>
                  <Button variant='danger'>{elementSelected.likes} Likes</Button>{' '}
                  <Button variant='secondary'>Interested</Button>{' '}
                </Col>
              </Row>
            </Container>
          </div>
        </>}
        handleClose={togglePopup}
      />}
    </div>
  )
}

export default Search