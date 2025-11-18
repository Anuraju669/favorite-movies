// src/components/Movie.jsx - REVISED to display actors

import React from 'react';

// Include 'actors' in the destructuring
const Movie = ({ title, genre, actors, whyYouLoveIt, imageUrl }) => { 
  return (
    <article className="movie-entry">
      <img src={imageUrl} alt={title} className="movie-image" />
      <div class="movie-content"> 
        <h3>{title}</h3>
        {/* New line for Actors */}
        <p className="movie-actors">
          <strong>Actors:</strong> {actors}
        </p>
        <p>
          <strong>Genre:</strong> {genre}
        </p>
        <p className="love-it">{whyYouLoveIt}</p>
      </div>
    </article>
  );
};

export default Movie;