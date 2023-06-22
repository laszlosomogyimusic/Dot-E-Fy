import React, { useState } from 'react'
import { Container } from "react-bootstrap"
import { SearchBar, SearchResults } from '../../components';

import API from "../../utils/API";

const Search = () => {
  const [results, setResults] = useState([]);

  return (
    <section>
      <SearchBar setResults={setResults} />
      <SearchResults results={results}/>
    </section>
  )
}

export default Search