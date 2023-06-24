import React from 'react'
import './AboutUs.css'

import laszloProfile from "../../images/laszloProfile.jpg"
import ewaProfile from "../../images/ewaProfile.jpeg"

//Spring
import {useSpring, animated} from "@react-spring/web";

const laszloGithub = "https://github.com/laszlosomogyimusic";
const laszloLinkedin = "https://www.linkedin.com/in/laszlo-somogyi/";

const ewaGithub= "https://github.com/ewagorka";
const ewaLinkedin="https://www.linkedin.com/in/ewa-g%C3%B3rka-9003b2167/";

const AboutUs = () => {
  
  
  const [rollIn] = useSpring(
    () => ({
      from: { opacity: 0,
        transform: 'perspective(600px) rotateX(90deg)'
      },
      to: { opacity: 1,
        transform: 'perspective(600px) rotateX(0deg)'
      },
      config: { duration: 1000 }
    }),
    []
  )

  const [rollInExtraSmall] = useSpring(
    () => ({
      from: { opacity: 0,
        transform: 'perspective(600px) rotateX(15deg)'
      },
      to: { opacity: 1,
        transform: 'perspective(600px) rotateX(0deg)'
      },
      config: { duration: 1000 }
    }),
    []
  )

  const [turnRight] = useSpring(
    () => ({
      from: { opacity: 0,
        transform: 'perspective(600px) rotateY(-135deg)'
      },
      to: { opacity: 1,
        transform: 'perspective(600px) rotateY(0deg)'
      },
      config: { duration: 1000 }
    }),
    []
  )

  const [turnLeft] = useSpring(
    () => ({
      from: { opacity: 0,
        transform: 'perspective(600px) rotateY(135deg)'
      },
      to: { opacity: 1,
        transform: 'perspective(600px) rotateY(0deg)'
      },
      config: { duration: 1000 }
    }),
    []
  )

  return (
    <section>
      <div className="container">
        <div  className="row">
          <div className="col-md-12">
            <animated.h1 style={rollIn}>About Us</animated.h1>
            <animated.p style={rollInExtraSmall}>Meet the Dotefy team! </animated.p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row col-md-12">

          <animated.div style={turnLeft} className="col-md-4 team-member">
            <img src={laszloProfile} alt="Laszlo's profile pictuew" className="img-fluid" />
            <h3>Laszlo</h3>
            <p>Laszlo is super cool!</p>
            <div className="contact-buttons">
              <a href={laszloGithub} className="CTA" role="button" aria-pressed="true">Github</a>
              <a href={laszloLinkedin} className="CTA" role="button" aria-pressed="true">LinkedIn</a>
            </div>
          </animated.div>
          <div className="col-md-1">
          </div>
          <animated.div style={turnRight} className="col-md-4 team-member">
            <img src={ewaProfile} alt="Ewa's profile pictuew" className="img-fluid" />
            <h3>Ewa</h3>
            <p>Ewa is super cool!</p>
            <div className="contact-buttons">
              <a href={ewaGithub} className="CTA" role="button" aria-pressed="true">Github</a>
              <a href={ewaLinkedin} className="CTA" role="button" aria-pressed="true">LinkedIn</a>
            </div>
          </animated.div>

        </div>
      </div>
    </section>
  )
}

export default AboutUs