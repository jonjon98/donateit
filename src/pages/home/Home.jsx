import React from 'react'
import Search from '../../components/search/Search.jsx'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => {

  return (
    <div>
      <Container className="py-3">
        <p className="font-weight-bold">Bold text.</p>
        <Search searchType="posts"/>
      </Container>
    </div>
  )
}

export default Home