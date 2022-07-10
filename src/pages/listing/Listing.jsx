import React from 'react'
import NavigationBar from '../../components/navbar/NavigationBar.jsx';
import Search from '../../components/search/Search';
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Listing = () => {
  return (
    <div>
      <Container className="py-3">
        <NavigationBar searchType="posts"></NavigationBar>
        <h1>Products for Sale!</h1>
        <Search searchType="items"/>
      </Container>
    </div>
  )
}

export default Listing