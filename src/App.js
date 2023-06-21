import React from 'react'
import './App.css'

import { Footer, Hero, Navbar, ResultGallery, SearchForm } from './components';
import { AboutUs, Contact } from './pages';


const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <SearchForm />
      <ResultGallery />
      <Footer />
    </main>
  )
}

export default App