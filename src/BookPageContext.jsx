import { createContext, useContext, useState } from 'react';

const BookPageContext = createContext();

export function BookPageProvider({ children }) {
  const [textSettings, setTextSettings] = useState({
    color: 'black',
    size: 'medium',
    bold: false,
  });

  const setTextColor = (color) => {
    setTextSettings((prev) => ({ ...prev, color }));
  };

  const setTextSize = (size) => {
    setTextSettings((prev) => ({ ...prev, size }));
  };

  const toggleBold = () => {
    setTextSettings((prev) => ({ ...prev, bold: !prev.bold }));
  };

  return (
    <BookPageContext.Provider
      value={{ textSettings, setTextColor, setTextSize, toggleBold }}
    >
      {children}
    </BookPageContext.Provider>
  );
}

export const useBookPageContext = () => useContext(BookPageContext);
