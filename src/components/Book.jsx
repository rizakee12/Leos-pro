import React from 'react';
import './Book.css';

const Book = ({ index, book, toggleStatus }) => {
  return (
    <li className="book-item">
      <span>{index + 1}.</span>
      <span>{book.title}</span>
      <span>{book.author}</span>
      <span>{book.status === 'Checked Out' ? book.dueDate : 'N/A'}</span>
      <span>{book.status}</span>
      <button className="toggle-button" onClick={() => toggleStatus(index)}>Toggle Status</button>
    </li>
  );
};

export default Book;
