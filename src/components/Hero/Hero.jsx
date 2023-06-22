import React from 'react'
import './Hero.css'

import heroImage from "../../images/heroImage.png"

const Hero = () => {
  return (
    <div className="jumbotron">
      <div className="container">
        <div className="row hero-row">
          <div className="col-md-6 hero-text">
            <h1>Unleash the Power of Lyrics!</h1>
            <p className="hero-p">Discover the magic behind your favourite songs with Dotefy. Whether you're searching for a song or an artist, our powerful lyrics search engine is here to help you dive deep into the world of music.</p>
          </div>
          <div className="col-md-5 hero-image">
            <img src={heroImage} alt="Woman listening to music on headphones" className="img-fluid"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero