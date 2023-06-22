import React from 'react'
import './AboutUs.css'

import laszloProfile from "../../images/laszloProfile.jpg"
import ewaProfile from "../../images/ewaProfile.jpeg"

const laszloGithub ="";
const laszloLinkedin ="";

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
        <div className="row col-md-12">
          
            <div className="col-md-4 team-member">
            <img src={laszloProfile} alt="Woman listening to music on headphones" className="img-fluid"/>
              <h3>Laszlo</h3>
              <p>Laszlo is super cool!</p>
              <div className="contact-buttons">
              <a href={laszloGithub} className="CTA" role="button" aria-pressed="true">Go to lyrics</a>
              <a href={laszloLinkedin} className="CTA" role="button" aria-pressed="true">Go to lyrics</a>
              </div>
            </div>
            <div className="col-md-1">
            </div>
            <div className="col-md-4 team-member">
            <img src={ewaProfile} alt="Woman listening to music on headphones" className="img-fluid"/>
              <h3>Ewa</h3>
              <p>Ewa is super cool!</p>
              <div className="contact-buttons">
              <a href={laszloGithub} className="CTA" role="button" aria-pressed="true">Go to lyrics</a>
              <a href={laszloLinkedin} className="CTA" role="button" aria-pressed="true">Go to lyrics</a>
              </div>
            </div>
          
        </div>
      </div>
    </section>
  )
}

export default AboutUs