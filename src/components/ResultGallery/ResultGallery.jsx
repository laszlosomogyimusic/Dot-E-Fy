import React from 'react'
import './ResultGallery.css'

import ResultCard from '../ResultCard/ResultCard';


const ResultGallery = ({ results }) => {

  return (
    <section className="result-gallery">
      {results.map((result, id) => {
        return < ResultCard 
                  artistName={result.result.artist_names} 
                  fullTitle={result.result.full_title}
                  headerImageThumbnailURL={result.result.header_image_thumbnail_url}
                  lyricsUrl={result.result.url}
                  key={id}
                />
      })}
    </section>
  );
}


export default ResultGallery