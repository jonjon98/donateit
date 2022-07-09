import React from 'react'
import Search from '../../components/search/Search.jsx'
import './Product.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap'
import pic1 from './Images/faith-yarn-Wr0TpKqf26s-unsplash.jpg'
import pic2 from './Images/haryo-setyadi-acn5ERAeSb4-unsplash.jpg'
import pic3 from './Images/ryan-hoffman-6Nub980bI3I-unsplash.jpg'
import pic4 from './Images/icon.png'
import { useState } from 'react';
import { db } from '../../firebase';
import { useEffect } from 'react';
import { onSnapshot, orderBy, collection, query as fireQuery } from 'firebase/firestore';

const Product = () => {
  const [elements, setElements] = useState([]);
  useEffect(() => {
      //placeholder for the posts, have to extract from DB
        const q = fireQuery(collection(db, "items"), orderBy("createdAt", "asc"));

        onSnapshot(q, (querySnapshot) => {
          let elm = [];
          querySnapshot.forEach((doc) => {
            elm.push(doc.data());
          })
          setElements(elm);
        })
      })
  

  return (
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
              <Card.Title>{elements.about}</Card.Title>
              <Card.Subtitle>{elements.desc}</Card.Subtitle>
              <Card.Text>{elements.createdAt}</Card.Text>
            </Card>
          </Col>
          <Col sm={4}>
            <Row><Button variant='outline-secondary' style={{maxwidth:'40%', margin:'20px', marginBottom:'20px'}}>
            <Image src={pic4} fluid width={50} style={{marginRight:'20px'}}></Image>
            {elements.createdBy}
            </Button>{' '}</Row>
            <Button variant='danger'>{elements.likes} Likes</Button>{' '}
            <Button variant='secondary'>Interested</Button>{' '}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Product