import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'

import { Footer, Navbar } from './components';
import { AboutUs, Contact, Home } from './pages';

import "../src/index.css"


const App = () => {
  return (
    <Router>
      <main>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        <Footer />
      </main>
    </Router>
  )
}

export default App