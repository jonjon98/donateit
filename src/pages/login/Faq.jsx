import React from 'react'
import LandingNavbar from './LandingNavbar';

const Faq = () => {
  return (
    <>
      <div className="login_page">
        <LandingNavbar />
        <div className="login_main">
          <div className="login_text">
            <h1>What is the point of all this?</h1>
            <p>This allows users to practice the 3Rs while engaging in a used product goods economy. This would severely reduce wastage in any form!</p>
            <h1>Why would I want points?</h1>
            <p>The points gathered can allow people to trade for other goods, or even purchase vouchers of popular brands for discounts!</p>
            <h1>Where do I recycle?</h1>
            <p>Fear not! Our applications uses the data.gov's API to retrieve locations of all recycling points.</p>
            <h1>When can I start!</h1>
            <p>Right now! Join the movement in Reducing, Reusing and Recycling! :D</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Faq;