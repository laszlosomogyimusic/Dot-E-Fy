import React from 'react'
import './Home.css'

import { Hero, ResultGallery, SearchForm } from '../../components';


const Home = () => {
  return (
    <section>
      <Hero />
      <SearchForm />
      <ResultGallery />
    </section>
  )
}

export default Home