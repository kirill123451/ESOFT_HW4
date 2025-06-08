import { useParams, useNavigate } from 'react-router-dom';
import { useAppContext } from './AppContext';
import { useBookPageContext } from './BookPageContext';
import './BookPage.css';

export default function BookPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { books, toggleFavorite, favorites } = useAppContext();
  const { textSettings, setTextColor, setTextSize, toggleBold } = useBookPageContext();

  const parsedId = parseInt(id);
  const book = books.find(book => book.id === parsedId);

  if (!book) return <p>Книга не найдена</p>;

  const isFavorite = favorites.includes(book.id);

  return (
    <div className="book-page">
      <button onClick={() => navigate('/')} className="back-button">
        Назад
      </button>
      <div className="book-header">
        <div className="book-cover-placeholder-large">
          📖
        </div>
        <h1>{book.title}</h1>
        <h2>{book.author}</h2>
        <p>Год: {book.year}</p>
        <p>ISBN: {book.isbn || 'Не указан'}</p>
        <p>{book.description}</p>
        <button
          onClick={() => toggleFavorite(book.id)}
          className={`favorite-button ${isFavorite ? 'favorited' : ''}`}
        >
          {isFavorite ? '♥ В избранном' : '♡ В избранное'}
        </button>
      </div>
      <div className="text-settings">
        <label>
          Цвет текста:
          <select
            value={textSettings.color}
            onChange={(e) => setTextColor(e.target.value)}
          >
            <option value="black">Чёрный</option>
            <option value="sepia">Сепия</option>
            <option value="darkblue">Тёмно-синий</option>
          </select>
        </label>
        <label>
          Размер текста:
          <select
            value={textSettings.size}
            onChange={(e) => setTextSize(e.target.value)}
          >
            <option value="small">Маленький</option>
            <option value="medium">Средний</option>
            <option value="large">Крупный</option>
          </select>
        </label>
        <label>
          Жирный шрифт:
          <input
            type="checkbox"
            checked={textSettings.bold}
            onChange={toggleBold}
          />
        </label>
      </div>
      <div
        id="book-text"
        className="book-content"
        style={{
          color: textSettings.color,
          fontSize: textSettings.size === 'small' ? '12px' : textSettings.size === 'medium' ? '16px' : '20px',
          fontWeight: textSettings.bold ? 'bold' : 'normal',
        }}
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
    </div>
  );
}

