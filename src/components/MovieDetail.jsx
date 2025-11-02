import React, { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export default function MovieDetail({ movie, onBack }) {
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}`)
      .then((res) => res.json())
      .then(setDetail);
  }, [movie]);

  if (!detail) return <p className="loading">⏳ Memuat detail...</p>;

  return (
    <div className="movie-detail">
      <button className="back-btn" onClick={onBack}>
        ← Kembali
      </button>
      <div className="detail-content">
        <img
          src={
            detail.Poster !== "N/A"
              ? detail.Poster
              : "https://via.placeholder.com/300x450?text=No+Image"
          }
          alt={detail.Title}
        />
        <div className="info">
          <h2>{detail.Title}</h2>
          <p><strong>Rilis:</strong> {detail.Released}</p>
          <p><strong>Durasi:</strong> {detail.Runtime}</p>
          <p><strong>Genre:</strong> {detail.Genre}</p>
          <p><strong>Rating IMDb:</strong> ⭐ {detail.imdbRating}</p>
          <p><strong>Aktor:</strong> {detail.Actors}</p>
          <p className="plot"><strong>Sinopsis:</strong> {detail.Plot}</p>
        </div>
      </div>
    </div>
  );
}
