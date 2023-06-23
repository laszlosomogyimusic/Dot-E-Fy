import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'

import { Footer, Navbar } from './components';
import { AboutUs, Contact, Home } from './pages';

import "../src/index.css"

//Spring
import {useSpring, animated} from "@react-spring/web";


const App = () => {
  const fade = useSpring({
    from:{
      opacity:0
    },
    to: {
      opacity: 1
    },
    config: { tension: 50, friction: 10 },
  })

  
  console.log(fade);
  return (
    <Router>
      <animated.main style={fade}>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        <Footer />
      </animated.main>
    </Router>
  )
}

export default App