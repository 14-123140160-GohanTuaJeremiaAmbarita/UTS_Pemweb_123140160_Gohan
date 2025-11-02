import React, { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import SearchForm from "./components/SearchForm"; // ← Tambahkan ini
import "./App.css";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export default function App() {
  const [movies, setMovies] = useState([]);
  const [selected, setSelected] = useState(null);

  // Fungsi ambil 10 film favorit saat awal load
  useEffect(() => {
    const favorites = [
      "Inception",
      "Interstellar",
      "Oppenheimer",
      "Avatar",
      "Avengers: Endgame",
      "The Batman",
      "Joker",
      "Dune: Part Two",
      "John Wick",
      "The Dark Knight",
    ];

    Promise.all(
      favorites.map((title) =>
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${title}`)
          .then((r) => r.json())
      )
    ).then(setMovies);
  }, []);

  // Fungsi pencarian film (dipanggil dari SearchForm)
  const searchMovies = async (query) => {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
    );
    const data = await res.json();
    if (data.Search) {
      setMovies(data.Search);
      setSelected(null);
    } else {
      setMovies([]);
    }
  };

  return (
    <div className="container">
      <header className="app-header">
        <h1>🎬 Movie Explorer</h1>
        <p>Temukan informasi film favoritmu secara cepat dan lengkap</p>
      </header>

      {/* Panggil komponen pencarian */}
      <SearchForm onSearch={searchMovies} />

      {/* Daftar atau Detail Film */}
      {!selected ? (
        <MovieList movies={movies} onSelect={setSelected} />
      ) : (
        <MovieDetail movie={selected} onBack={() => setSelected(null)} />
      )}

      <footer className="app-footer">
        Dibuat oleh <strong>Gohan Ambarita</strong> (123140160)
      </footer>
    </div>
  );
}
