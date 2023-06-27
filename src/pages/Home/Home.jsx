import React from 'react'
import './Home.css'

import { Hero, Search } from '../../components';
import ContentRow from '../../components/ContentRow/ContentRow';

//Spring
import { useSpring, animated } from "@react-spring/web";

//images
import img1 from "../../images/img1.png"
import img2 from "../../images/img2.png"
import img3 from "../../images/img3.png"

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
      <ContentRow
        left= {false}
        t = {"Choose Your Anthem."}
        p = {"With an extensive database of songs from all genres and eras, Dotefy empowers you to explore and select the perfect anthem that resonates with you. Whether it's a timeless classic or the latest chart-topper, the choice is yours."}
        img={img1}
        alt={"Preview of 3 songs"}
      ></ContentRow>
      <ContentRow
        left= {true}
        t = {"Unveil the Hidden Language."}
        p = {"Behind every melody lies a story waiting to be told. With Dotefy, you can go beyond the beats and immerse yourself in the soulful poetry that brings a song to life. Feel the emotions, embrace the lyrics, and let the music guide you on a transformative journey."}
        img={img2}
        alt={"An explanation of a song lyric"}
      ></ContentRow>
      <ContentRow
        left= {false}
        t = {"The Stage is Yours!"}
        p = {"Whether you're singing alone or performing for an audience, Dotefy empowers you to take center stage. Embrace the thrill of expressing yourself through music and make every performance a memorable one. Your voice has the power to move hearts, and Dotefy is here to make sure you shine brighter than ever before."}
        img={img3}
        alt={"Woman singing in the spotlight"}
      ></ContentRow>
    </section>
  )
}

export default Home