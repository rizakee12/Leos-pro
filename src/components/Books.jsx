import React, { useState } from 'react';
import Book from './Book';
import './Books.css';

const Books = ({ searchQuery }) => {
  const [books, setBooks] = useState([
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString(), status: 'Checked Out' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', dueDate: '', status: 'Available' },
    { title: '1984', author: 'George Orwell', dueDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toLocaleDateString(), status: 'Checked Out' },
    { title: 'Pride and Prejudice', author: 'Jane Austen', dueDate: '', status: 'Available' },
    { title: 'Moby-Dick', author: 'Herman Melville', dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString(), status: 'Checked Out' },
    { title: 'War and Peace', author: 'Leo Tolstoy', dueDate: '', status: 'Available' },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString(), status: 'Checked Out' },
    { title: 'The Hobbit', author: 'J.R.R. Tolkien', dueDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toLocaleDateString(), status: 'Checked Out' },
    { title: 'Brave New World', author: 'Aldous Huxley', dueDate: '', status: 'Available' },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', dueDate: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000).toLocaleDateString(), status: 'Checked Out' },
  ]);

  const toggleStatus = (index) => {
    setBooks(books.map((book, i) => {
      if (i === index) {
        return {
          ...book,
          status: book.status === 'Checked Out' ? 'Available' : 'Checked Out',
          dueDate: book.status === 'Checked Out' ? '' : new Date(Date.now() + Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toLocaleDateString(),
        };
      }
      return book;
    }));
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="books-container">
      <ul className="books-list">
        <li className="books-header">
          <span>No.</span>
          <span>Title</span>
          <span>Author</span>
          <span>Due Date</span>
          <span>Status</span>
          <span>Actions</span>
        </li>
        {filteredBooks.map((book, index) => (
          <Book
            key={index}
            index={index}
            book={book}
            toggleStatus={toggleStatus}
          />
        ))}
      </ul>
    </div>
  );
};

export default Books;
