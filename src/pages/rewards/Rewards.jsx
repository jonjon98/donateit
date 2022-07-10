import React from 'react'
import Search from '../../components/search/Search.jsx'
import { Container } from 'react-bootstrap'
import NavigationBar from '../../components/navbar/NavigationBar.jsx'

const Rewards = () => {
  return (
    <div>
      <Container className="py-3">
        <NavigationBar></NavigationBar>
        <Search searchType="rewards"/>
      </Container>
    </div>
  )
}

export default Rewards