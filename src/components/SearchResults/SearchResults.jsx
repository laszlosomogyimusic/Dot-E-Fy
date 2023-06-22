import React from 'react'

import './SearchResults.css'
import ResultCard from '../ResultCard/ResultCard';

const SearchResults = ({ results }) => {

  console.log(results);
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return < ResultCard result={result} key={id}/>
        // return <div key={id}>{result.name}</div>;
      })}
    </div>
  );
}

export default SearchResults