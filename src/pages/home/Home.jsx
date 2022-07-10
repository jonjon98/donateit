import React from 'react'
import NavigationBar from '../../components/navbar/NavigationBar.jsx';
import Search from '../../components/search/Search.jsx'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateListing from '../createListing/CreateListing';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Container className="py-3">
        <NavigationBar searchType="posts"></NavigationBar>
        <div className="gov_api">
          <h1>Find your nearest Recycling bin!</h1>
          <iframe title="gov_api" src="https://data.gov.sg/dataset/recycling-bins/resource/895f1883-d3bf-467c-833c-226ad92c6229/view/7b7e3bd8-8f0a-4b37-839f-5371490495b6" frameBorder="0"> </iframe>
        </div>
        <CreateListing></CreateListing>
        <Search searchType="posts"/>
      </Container>
    </div>
  )
}

export default Home