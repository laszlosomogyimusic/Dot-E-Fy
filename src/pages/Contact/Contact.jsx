import React from 'react'

import './Contact.css'
import { ContactForm } from '../../components';

//Spring
import { useSpring, animated } from "@react-spring/web";

const Contact = () => {

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

  const [rollInExtraSmall] = useSpring(
    () => ({
      from: {
        opacity: 0,
        transform: 'perspective(600px) rotateX(15deg)'
      },
      to: {
        opacity: 1,
        transform: 'perspective(600px) rotateX(0deg)'
      },
      config: { duration: 1000 }
    }),
    []
  )

  const [fade] = useSpring(
    () => ({
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      },
      config: { duration: 1000 }
    }),
    []
  )

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <animated.h1 style={rollIn}>Contact Us</animated.h1>
            <animated.p style={rollInExtraSmall}>
              Got questions or ideas for future development?<br /><br />
              We'd love to hear from you! Fill out the form below and let us know how we can assist you. Whether you have inquiries about our services, suggestions for new features, or any other requests, our team is here to listen and support you. </animated.p>
          </div>
        </div>
      </div>
      <animated.div style={fade}>
        <ContactForm></ContactForm>
      </animated.div>
    </section>
  )

}

export default Contact