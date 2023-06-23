import React from 'react'
import './AboutUs.css'

import laszloProfile from "../../images/laszloProfile.jpg"
import ewaProfile from "../../images/ewaProfile.jpeg"

const laszloGithub = "https://github.com/laszlosomogyimusic";
const laszloLinkedin = "https://www.linkedin.com/in/laszlo-somogyi/";

const ewaGithub= "https://github.com/ewagorka";
const ewaLinkedin="https://www.linkedin.com/in/ewa-g%C3%B3rka-9003b2167/";

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
            <img src={laszloProfile} alt="Laszlo's profile pictuew" className="img-fluid" />
            <h3>Laszlo</h3>
            <p>Laszlo is super cool!</p>
            <div className="contact-buttons">
              <a href={laszloGithub} className="CTA" role="button" aria-pressed="true">Github</a>
              <a href={laszloLinkedin} className="CTA" role="button" aria-pressed="true">LinkedIn</a>
            </div>
          </div>
          <div className="col-md-1">
          </div>
          <div className="col-md-4 team-member">
            <img src={ewaProfile} alt="Ewa's profile pictuew" className="img-fluid" />
            <h3>Ewa</h3>
            <p>Ewa is super cool!</p>
            <div className="contact-buttons">
              <a href={ewaGithub} className="CTA" role="button" aria-pressed="true">Github</a>
              <a href={ewaLinkedin} className="CTA" role="button" aria-pressed="true">LinkedIn</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutUs