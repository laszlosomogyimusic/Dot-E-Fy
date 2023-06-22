import React, { useState } from 'react'
import './SearchBar.css'

import API from "../../utils/API";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const searchLyrics = (value) => {
    API.search(value)
      .then(response => {
        setResults(response.data.hits);
      })
     
  }

  const handleChange = (value) => {
    setInput(value);

  };

  const handleSubmit = () => {
    searchLyrics(input);
  }

  return (
    <section className="search-bar">
      <input className="search-input"
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button className="search-button" onClick={(e) => handleSubmit()}>Search</button>
    </section>
  );
}

export default SearchBar