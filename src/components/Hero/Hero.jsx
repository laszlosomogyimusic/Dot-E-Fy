import React from 'react'
import './Hero.css'

//Spring
import { useSpring, animated } from "@react-spring/web";

import heroImage from "../../images/heroImage.png"


const Hero = () => {

  // Big turn animation on X axis
  const [rollIn] = useSpring(
    () => ({
      from: {
        opacity: 0,
        transform: 'perspective(600px) rotateX(90deg)'
      },
      to: {
        opacity: 1,
        transform: 'perspective(600px) rotateX(0deg)'
      },
      config: { duration: 1000 }
    }),
    []
  )

  // Small turn animation on X axis
  const [rollInSmall] = useSpring(
    () => ({
      from: {
        opacity: 0,
        transform: 'perspective(600px) rotateX(45deg)'
      },
      to: {
        opacity: 1,
        transform: 'perspective(600px) rotateX(0deg)'
      },
      config: { duration: 1000 }
    }),
    []
  )

  // Big turn animation on X axis
  const [imageIntro] = useSpring(
    () => ({
      from: {
        opacity: 0,
        transform: 'perspective(600px) rotateY(180deg)'
      },
      to: {
        opacity: 1,
        transform: 'perspective(600px) rotateY(0deg)'
      },
      config: { duration: 1000 }
    }),
    []
  )


  return (

    <div className="jumbotron">
      <div className="container">
        <div className="row hero-row">
          <div className="col-md-6 hero-text">
            <animated.h1 style={rollIn}>Unleash the Power of Lyrics!</animated.h1>
            <animated.p style={rollInSmall} className="hero-p">Discover the magic behind your favourite songs with Dotefy. Whether you're searching for a song or an artist, our powerful lyrics search engine is here to help you dive deep into the world of music.</animated.p>
          </div>
          <div className="col-md-5 hero-image">
            <animated.img style={imageIntro} src={heroImage} alt="Woman listening to music on headphones" className="img-fluid"></animated.img>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero