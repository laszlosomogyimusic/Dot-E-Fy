import React from 'react'
import './Home.css'

import { Hero, Search } from '../../components';

//Spring
import { useSpring, animated } from "@react-spring/web";

const Home = () => {

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

  return (
    <section className="home">
      <Hero />
      <animated.div style={rollInExtraSmall}>
        <Search />
      </animated.div>
    </section>
  )
}

export default Home