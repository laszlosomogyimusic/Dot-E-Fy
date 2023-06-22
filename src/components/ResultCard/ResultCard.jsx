import React from 'react'
import './ResultCard.css'

const ResultCard = ({artistName, fullTitle, headerImageThumbnailURL, lyricsUrl}) => {

  return (
    <article className="result-card">
      <img className="result-card-img" src={headerImageThumbnailURL} alt={fullTitle}/><br/>
      <h3 className="result-card-title">{artistName}</h3>
      <p className="result-card-text">{fullTitle}</p>
      <a href={lyricsUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Go to lyrics</a>
    </article>
  )
}

export default ResultCard