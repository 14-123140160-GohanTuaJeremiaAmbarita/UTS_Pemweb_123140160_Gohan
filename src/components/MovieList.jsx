import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList({ movies, onSelect }) {
  if (!movies || movies.length === 0)
    return <p className="no-results">Tidak ada film ditemukan.</p>;

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID || movie.Title} movie={movie} onSelect={onSelect} />
      ))}
    </div>
  );
}
