import React from 'react'
import './ResultCard.css'

const ResultCard = ({result}) => {
  return (
    <article onClick={(e) => alert(`You clicked on ${result.name}`)}>{result.name}</article>
  )
}

export default ResultCard