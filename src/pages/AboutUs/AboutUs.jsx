import React from 'react'
import './AboutUs.css'

import heroImage from "../../images/heroImage.png"

const AboutUs = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>About Us</h1>
            <p>Meet the Dotefy team!</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          
            <div className="col-md-4 team-member">
            <img src={heroImage} alt="Woman listening to music on headphones" className="img-fluid"/>
              <h3>Laszlo</h3>
            </div>
            <div className="col-md-1">
            </div>
            <div className="col-md-4 team-member">
            <img src={heroImage} alt="Woman listening to music on headphones" className="img-fluid"/>
              <h3>Ewa</h3>
            </div>
          
        </div>
      </div>
    </section>
  )
}

export default AboutUs