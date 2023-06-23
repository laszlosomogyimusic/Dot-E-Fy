import React, { useState } from 'react'
import { SearchBar, ResultGallery } from '../../components';

import "./Search.css"

const Search = () => {
  const [results, setResults] = useState([]);

  return (
    <section className="search">
      <div className="container">
        <div className="row col-md-12">
          <h2>What are we singing today?</h2>
          <SearchBar setResults={setResults} />
          <ResultGallery results={results} />
        </div>
      </div>
    </section>
  )
}

export default Search