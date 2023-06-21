import React, { useState } from 'react'
import './Home.css'

import { Hero, SearchBar, SearchResults } from '../../components';

const Home = () => {
  const [results, setResults] = useState([]);

  return (
    <section>
      <Hero />
      <SearchBar setResults={setResults} />
      <SearchResults results={results}/>
    </section>
  )
}

export default Home