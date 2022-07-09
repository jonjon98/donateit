import React from 'react'
import Search from '../../components/search/Search.jsx'
import { Container } from 'react-bootstrap'

const Listing = () => {
  return (
    <div>
      <Container className="py-3">
        <p className="font-weight-bold">DonateIt</p>
        <Search searchType="items"/>
      </Container>
    </div>
  )
}

export default Listing