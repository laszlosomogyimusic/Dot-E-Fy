import React, { useState } from 'react'
import { SearchBar, ResultGallery } from '../../components';

const Search = () => {
  const [results, setResults] = useState([]);

  return (
    <section className="search">
      <SearchBar setResults={setResults} />
      <ResultGallery results={results}/>
    </section>
  )
}

export default Search