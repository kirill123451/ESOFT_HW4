import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Header/Header.jsx';
import FilterPanel from './FilterPanel.jsx';
import BookList from './BookList.jsx';
import BookPage from './BookPage.jsx';
import SettingsPage from './SettingsPage.jsx';
import { BookPageProvider } from './BookPageContext';
import './App.css';
import { AppProvider } from './AppContext'


function MainApp() {
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [books, setBooks] = useState([]);
  const [filters, setFilters] = useState({
    range: [1900, 2000],
    authors: [],
    favoritesOnly: false,
  });

  useEffect(() => {
    const mockBooks = [
      { id: 1, title: "Мёртвые души", author: "Гоголь Н.В.", year: 1842, isFavorite: false, description: "Классика русской литературы" },
      { id: 2, title: "Евгений Онегин", author: "Пушкин А.С.", year: 1833, isFavorite: false, description: "Роман в стихах" },
      { id: 3, title: "Вишнёвый сад", author: "Чехов А.П.", year: 1904, isFavorite: false, description: "Драматическое произведение" },
      { id: 4, title: "Война и мир", author: "Толстой Л.Н.", year: 1869, isFavorite: false, description: "Эпический роман" },
      { id: 5, title: "Преступление и наказание", author: "Достоевский Ф.М.", year: 1866, isFavorite: false, description: "Психологический роман" },
    ];
    setBooks(mockBooks);
  }, []);

  useEffect(() => {
    const count = books.filter(book => book.isFavorite).length;
    setFavoritesCount(count);
  }, [books]);

  const toggleFavorite = (bookId) => {
    setBooks(books.map(book =>
      book.id === bookId ? { ...book, isFavorite: !book.isFavorite } : book
    ));
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="app light-theme">
      <Header favoritesCount={favoritesCount} />
      <div className="main-content">
        <FilterPanel
          onFilterChange={handleFilterChange}
          currentFilters={filters}
        />
        <BookList
          books={books}
          filters={filters}
          onToggleFavorite={toggleFavorite}
        />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppProvider>
        <Routes>
          <Route path="/" element={<MainApp />} />
          <Route
            path="/book/:id"
            element={
              <BookPageProvider>
                <BookPage />
              </BookPageProvider>
            }
          />
          <Route
            path="/settings"
            element={
              <BookPageProvider>
                <SettingsPage />
              </BookPageProvider>
            }
          />
        </Routes>
      </AppProvider>
    </Router>
  );
}
