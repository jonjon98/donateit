import React from 'react'
import LandingNavbar from './LandingNavbar';

const AboutUs = () => {
  return (
    <>
      <div className="login_page">
        <LandingNavbar />
        <div className="login_main">
          <div className="login_text">
            <h1>Reduce your wastage</h1>
            <p>Lorem sodjosdjosjdLorem sodjosdjosjdLorem </p>
            <div className="items_donated">
              <p>Items donated so far</p>
              <h1>40283</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs;