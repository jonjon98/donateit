import React from 'react'
import LandingNavbar from './LandingNavbar';

const AboutUs = () => {
  return (
    <>
      <div className="login_page">
        <LandingNavbar />
        <div className="login_main">
          <div className="login_text">
            <h1>We aim to reduce your wastage.</h1>
            <p>This is achieved by a 3-pronged approach.</p>
            <p>Recycling - Getting users to be encouraged to recycle and post it online!</p>
            <p>Reducing - Getting users to reduce wastage by purchasing used stuff using our points.</p>
            <p>Reusing - Getting users to reuse other user's stuff by purchasing using points.</p>
            <div className="items_donated">
              <p>Items donated so far</p>
              <h1>40,283</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs;