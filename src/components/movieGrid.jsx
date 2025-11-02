import React from "react";
import MovieCard from "./MovieCard.jsx";

export default function MovieGrid({ movies }) {
  if (movies.length === 0) return <p className="no-results">Tidak ada hasil.</p>;
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}
