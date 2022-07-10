import React from 'react'
import NavigationBar from '../../components/navbar/NavigationBar.jsx';
import Search from '../../components/search/Search.jsx'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateListing from '../createListing/CreateListing';

const Home = () => {
  return (
    <div>
      <Container className="py-3">
        <NavigationBar searchType="posts"></NavigationBar>
        <CreateListing></CreateListing>
        <Search searchType="posts"/>
      </Container>
    </div>
  )
}

export default Home