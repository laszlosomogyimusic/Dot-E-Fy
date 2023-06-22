import React from 'react'
import './ResultCard.css'

const ResultCard = ({artistName, fullTitle, headerImageThumbnailURL}) => {
  return (
    <article className="result-card" onClick={(e) => alert(`You clicked on ${artistName}`)}>
      <img className="result-card-img" src={headerImageThumbnailURL} /><br/>
      <h3 className="result-card-title">{artistName}</h3>
      <p className="result-card-text">{fullTitle}</p>
    </article>
  )
}

export default ResultCard