import React, { useState } from 'react';

const SearchBar = ({ onSearch, placeholder = "Buscar contactos..." }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholder}
      />
      <button type="submit" className="btn btn-primary">
        🔍
      </button>
    </form>
  );
};

export default SearchBar;