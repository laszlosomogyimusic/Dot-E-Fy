import React from 'react'
import './ResultCard.css'

const ResultCard = ({ artistName, fullTitle, headerImageThumbnailURL, lyricsUrl }) => {

  return (
    <article className="result-card">
        <div className="card ">
          <img className="result-card-img" src={headerImageThumbnailURL} alt={fullTitle} />
          <h3 className="result-card-title">{artistName}</h3>
          <p className="result-card-text">{fullTitle}</p>
          <a href={lyricsUrl} target="_blank" rel="noreferrer" className="CTA" role="button" aria-pressed="true">Go to lyrics</a>
        </div>
    </article >
  )
}

export default ResultCard