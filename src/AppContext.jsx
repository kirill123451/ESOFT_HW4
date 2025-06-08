import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const loadSampleBooks = () => {
    const sampleBooks = [
      { id: 1, title: "Мёртвые души", author: "Гоголь Н.В.", year: 1842, isFavorite: false },
      { id: 2, title: "Евгений Онегин", author: "Пушкин А.С.", year: 1833, isFavorite: false },
      { id: 3, title: "Вишнёвый сад", author: "Чехов А.П.", year: 1904, isFavorite: false },
    ];
    setBooks(sampleBooks);
  };

  useEffect(() => {
    loadSampleBooks();
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        books,
        favorites,
        loadSampleBooks,
        setBooks,
        setFavorites,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);

