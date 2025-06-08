
import { useMemo } from 'react';
import BookCard from './BookCard.jsx';
import './BookList.css';

export default function BookList({ books, filters, onToggleFavorite }) {
  const filteredBooks = useMemo(() => {
    return books.filter(book => {
      const yearMatch = book.year >= filters.range[0] && book.year <= filters.range[1];
      const authorMatch = filters.authors.length === 0 || 
        filters.authors.some(author => book.author.includes(author.label));
      const favoriteMatch = !filters.favoritesOnly || book.isFavorite;
      
      return yearMatch && authorMatch && favoriteMatch;
    });
  }, [books, filters]);

  return (
    <div className="book-list-container">
      <div className="book-grid">
        {filteredBooks.map(book => (
          <BookCard 
            key={book.id} 
            book={book} 
            onToggleFavorite={onToggleFavorite} 
          />
        ))}
      </div>
    </div>
  );
}