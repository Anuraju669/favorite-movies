// src/App.jsx

import React from 'react';
import Movie from './Movie';
import './App.css';

const movieData = [
  {
    id: 1,
    title: 'K.G.F: Chapter 1 & 2',
    genre: 'Action, Period Drama, Crime',
    actors: 'Yash, Srinidhi Shetty, Sanjay Dutt', // Added Actors
    love: `The KGF saga is a cinematic spectacle driven by powerful character arcs, high-octane action, and stunning visuals. Its sheer scale and Yash's charismatic performance make it a groundbreaking entry in Indian cinema that redefined commercial success.`,
    imageUrl: 'https://pplx-res.cloudinary.com/image/fetch/s--Lr3JKQLP--/t_fit2/https://m.media-amazon.com/images/M/MV5BM2M0YmIxNzItOWI4My00MmQzLWE0NGYtZTM3NjllNjIwZjc5XkEyXkFqcGc%40._V1_.jpg' 
  },
  {
    id: 2,
    title: 'Vikram',
    genre: 'Action, Thriller, Neo-Noir',
    actors: 'Kamal Haasan, Fahadh Faasil, Vijay Sethupathi', // Added Actors
    love: `Part of Lokesh Kanagaraj's cinematic universe (LCU), this film is a masterclass in weaving complex plots and delivering stylish, relentless action. Kamal Haasan's comeback performance and the explosive climax are truly unforgettable.`,
    imageUrl: 'https://pplx-res.cloudinary.com/image/fetch/s--dQJ7d_cO--/t_limit_thumbnail/https://m.media-amazon.com/images/M/MV5BMmViYjExY2UtMzZjOS00OGQ2LWEzNWYtNGYxY2NkY2RmMDE3XkEyXkFqcGc%40._V1_.jpg'
  },
  {
    id: 3,
    title: 'Baahubali: The Beginning & The Conclusion',
    genre: 'Epic, Fantasy, Action',
    actors: 'Prabhas, Rana Daggubati, Anushka Shetty', // Added Actors
    love: `A visual feast that set new benchmarks for Indian filmmaking. The world-building is majestic, the battle sequences are epic in scale, and the compelling mythology created by S. S. Rajamouli makes it a timeless, globally celebrated fantasy saga.`,
    imageUrl: 'https://st.perplexity.ai/estatic/0b226c450798410ac541646c86ec31afd840e5beab817a5d84fa821e7db61981ec84c3b4a3f072a7a2e1899c9fb06c6ea8a5e785aa955de4dc86d27e70ec7150c7becf2bc32f96a7a86510194da46010ab93c72b5254d9fc2273a65096ffce8b93a8606d882d7b670167949df76d65c5'
  },
  {
    id: 4,
    title: 'Kantara',
    genre: 'Action, Folkloric Fantasy, Thriller',
    actors: 'Rishab Shetty, Sapthami Gowda, Kishore', // Added Actors
    love: `Kantara brilliantly blends local Tulu Nadu culture and folklore with a visceral, thrilling narrative. The film's stunning cinematography and the raw, powerful climax centered around the Daiva concept deliver an unparalleled spiritual and cinematic experience.`,
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BNTRlYmEzM2EtMWRkMC00OWJkLWFmN2ItNTQxNmQ4Zjk1OGQ5XkEyXkFqcGc@._V1_.jpg'
  },

];

function App() {
  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <h1>🎬 Cinema Collection</h1>
        <p className="subtitle">Movies That Inspired Me</p>
      </header>

      {/* Introduction Section */}
      <section className="introduction">
        <h2>About My Movie Journey</h2>
        <p>
          My love for movies is rooted in their ability to transport me to other worlds and evoke powerful emotions. 
          I believe cinema is one of the most compelling forms of storytelling humanity has ever created.
          The mix of visual artistry, sound design, and compelling narratives makes every viewing a unique experience.
          I particularly enjoy watching films that challenge my perspective, often gravitating towards well-crafted **Sci-Fi** and **Drama** with deep character exploration.
        </p>
      </section>

      {/* Movies List Section */}
      <section className="movies-list">
        <h2>My Top Picks</h2>
        {/* Map over the movieData array to render the Movie component for each entry */}
        {movieData.map((movie) => (
          <Movie
            key={movie.id}
            title={movie.title}
            genre={movie.genre}
            whyYouLoveIt={movie.love}
            imageUrl={movie.imageUrl} // Pass the image URL here
          />
        ))}
      </section>
    </div>
  );
}

export default App;