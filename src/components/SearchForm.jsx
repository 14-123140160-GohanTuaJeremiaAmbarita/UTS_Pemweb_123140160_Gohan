import React, { useState } from "react";

export default function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Cari film..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Cari</button>
    </form>
  );
}
