import React from 'react'
import './Home.css'

import { Hero, Search } from '../../components';

const Home = () => {
  return (
    <section className="home">
      <Hero />
      <Search />
    </section>
  )
}

export default Home