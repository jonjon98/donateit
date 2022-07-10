import React from 'react'
import SearchBar from './SearchBar.jsx'
import Popup from '../popup/Popup.jsx';
import pic1 from '../../media/faith-yarn-Wr0TpKqf26s-unsplash.jpg'
import pic2 from '../../media/haryo-setyadi-acn5ERAeSb4-unsplash.jpg'
import pic3 from '../../media/ryan-hoffman-6Nub980bI3I-unsplash.jpg'
import pic4 from '../../media/icon.png'
import { useState } from 'react';
import { db } from '../../firebase';
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react';
import { onSnapshot, orderBy, collection, query as fireQuery } from 'firebase/firestore';

const Search = ({ searchType }) => {
  //handle data extraction from DB
  const [elements, setElements] = useState([]);
  const [posts, setPosts] = useState(false);
  const [items, setItems] = useState(false);
  const [rewards, setRewards] = useState(false);
  useEffect(() => {
    if(searchType === "posts"){
      const q = fireQuery(collection(db, "posts"), orderBy("createdAt", "asc"));
      onSnapshot(q, (querySnapshot) => {
        let elm = [];
        querySnapshot.forEach((doc) => {
          elm.push(doc.data());
        })
        setElements(elm);
      })
      setPosts(true);
      setItems(false);
      setRewards(false);
    }
    else if(searchType === "items"){
      const q = fireQuery(collection(db, "items"), orderBy("createdAt", "asc"));

      onSnapshot(q, (querySnapshot) => {
        let elm = [];
        querySnapshot.forEach((doc) => {
          elm.push(doc.data());
        })
        setElements(elm);
      })
      setPosts(false);
      setItems(true);
      setRewards(false);
    } 
    else if(searchType === "rewards"){
      const q = fireQuery(collection(db, "rewards"), orderBy("createdAt", "asc"));

      onSnapshot(q, (querySnapshot) => {
        let elm = [];
        querySnapshot.forEach((doc) => {
          elm.push(doc.data());
        })
        setElements(elm);
      })
      setPosts(false);
      setItems(false);
      setRewards(true);
    } 
  }, [searchType])

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
      {/* Posts */}
      <div hidden={!posts}>
        <ul>
          {filteredElements.map(element => (
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
          content={<>
            <b>{elementSelected.name}</b>
              <p>{elementSelected.about}</p>
              <p>{new Date(elementSelected.createdAt.seconds * 1000).toLocaleDateString("en-US")}</p>
              <img alt="img" src={elementSelected.image}></img>
            <button>Upvote</button>
          </>}
          handleClose={togglePopup}
        />}
        </div>
        
        {/* Items */}
        <div hidden={!items}>
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
                    <Card>
                      <Card.Title>{elementSelected.about}</Card.Title>
                      <Card.Subtitle>{elementSelected.desc}</Card.Subtitle>
                      <Card.Text>{elementSelected.createdAt.days}</Card.Text>
                    </Card>
                  </Col>
                  <Col sm={4}>
                    <Row><Button variant='outline-secondary' style={{maxwidth:'40%', margin:'20px', marginBottom:'20px'}}>
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
        
        {/* Rewards */}
        <div hidden={!rewards}>
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
            <b>{elementSelected.name}</b>
              <p>{elementSelected.about}</p>
              <p>{new Date(elementSelected.createdAt.seconds * 1000).toLocaleDateString("en-US")}</p>
            <button>Purchase</button>
          </>}
          handleClose={togglePopup}
        />}
        </div>
    </div>
  )
}

export default Search