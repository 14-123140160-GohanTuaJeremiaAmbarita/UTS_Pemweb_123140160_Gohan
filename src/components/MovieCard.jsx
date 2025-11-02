import React from "react";

export default function MovieCard({ movie, onSelect }) {
  return (
    <div
      className="movie-card"
      role="button"
      onClick={() => onSelect(movie)}
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onSelect(movie)}  
    >
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x450?text=No+Image"
        }
        alt={movie.Title}
      />
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
}
