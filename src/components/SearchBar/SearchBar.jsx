import React, { useState } from 'react'
import './SearchBar.css'

import lyricsSearch from "../../utils/API";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const searchLyrics = (value) => {
    lyricsSearch(value)
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

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  }

  return (
    <section className="search-bar">
      <input className="search-input"
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="search-button" onClick={(e) => handleSubmit()}>Search</button>
    </section>
  );
}

export default SearchBar