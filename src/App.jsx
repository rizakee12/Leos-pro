import React, { useState } from 'react';
import Books from './components/Books';
import SearchFilter from './components/SearchFilter';
import './App.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="app-container">
      <h1>Library System</h1>
      <SearchFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Books searchQuery={searchQuery} />
    </div>
  );
};

export default App;
