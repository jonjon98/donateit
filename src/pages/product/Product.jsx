import React from 'react'
import './Product.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Form, Card, Image, Button } from 'react-bootstrap'
import pic1 from './Images/faith-yarn-Wr0TpKqf26s-unsplash.jpg'
import pic2 from './Images/haryo-setyadi-acn5ERAeSb4-unsplash.jpg'
import pic3 from './Images/ryan-hoffman-6Nub980bI3I-unsplash.jpg'
import pic4 from './Images/icon.png'

const Product = () => {
  return (
    <div class="maincontainer">
      <Container>
        <Row></Row>
        <Row>
          <Col><Image src={pic1} fluid></Image></Col>
          <Col><Image src={pic2} fluid></Image></Col>
          <Col><Image src={pic3} fluid></Image></Col>
        </Row>
        <Row className='align-items-center'>
          <Col sm={8}>
            Details
          </Col>
          <Col sm={4}>
            <Row><Button variant='outline-secondary' style={{width:'50%', margin:'20px', marginBottom:'20px'}}>
            <Image src={pic4} fluid width={50} style={{marginRight:'20px'}}></Image>
            User 1
            </Button>{' '}</Row>
            <Button variant='danger'>34 Likes</Button>{' '}
            <Button variant='secondary'>Interested</Button>{' '}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Product