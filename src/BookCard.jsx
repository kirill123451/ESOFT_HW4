import { memo } from 'react';
import { Link } from 'react-router-dom';
import './BookCard.css';

function BookCard({ book, onToggleFavorite }) {
  return (
    <div className="book-card">
      <Link to={`/book/${book.id}`} className="book-link">
        <div className="book-cover-placeholder">📖</div>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <p>{book.year}</p>
      </Link>
      <button 
        onClick={() => onToggleFavorite(book.id)}
        className={`favorite-button ${book.isFavorite ? 'favorited' : ''}`}
      >
        {book.isFavorite ? '♥' : '♡'}
      </button>
    </div>
  );
}

export default memo(BookCard);
