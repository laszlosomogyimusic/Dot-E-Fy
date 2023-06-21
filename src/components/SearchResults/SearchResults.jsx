import React from 'react'

import './SearchResults.css'

const SearchResults = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return (
          <div
            className="search-result"
            onClick={(e) => alert(`You selected ${result}!`)}
          >
            {result}
          </div>

        )
      })}
    </div>
  );
}

export default SearchResults