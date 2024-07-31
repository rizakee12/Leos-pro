import React from 'react';
import './SearchFilter.css';

const SearchFilter = ({ searchQuery, setSearchQuery }) => {
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchQuery}
        onChange={handleSearch}
        className="search-input"
      />
    </div>
  );
};

export default SearchFilter;
