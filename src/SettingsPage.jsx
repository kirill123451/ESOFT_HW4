import './SettingsPage.css'
import { useAppContext } from './AppContext';
import { useBookPageContext } from './BookPageContext';
import BookCard from './BookCard';

export default function SettingsPage() {
  const { theme, toggleTheme, books, favorites, setFavorites, loadSampleBooks } = useAppContext();
  const { textSettings, setTextColor, setTextSize, toggleBold } = useBookPageContext();


  const resetFavorites = () => {
    if (window.confirm('Вы уверены, что хотите сбросить все избранное?')) {
      setFavorites([]);
    }
  };


  const applyDefaultTextSettings = () => {
    localStorage.setItem('defaultTextSettings', JSON.stringify(textSettings));
  };

  return (
    <div className="settings-page">
      <h1>Настройки</h1>

      <section>
        <h2>Настройки темы</h2>
        <label>
          Переключить тему:
          <select value={theme} onChange={toggleTheme}>
            <option value="light">Светлая</option>
            <option value="dark">Тёмная</option>
          </select>
        </label>
        <div className="theme-preview">
          {books.slice(0, 3).map(book => (
            <BookCard key={book.id} book={book} onToggleFavorite={() => {}} />
          ))}
        </div>
      </section>

      <section>
        <h2>Управление данными</h2>
        <button onClick={resetFavorites}>Сбросить все избранное</button>
        <button onClick={loadSampleBooks}>Загрузить примеры книг</button>
      </section>

      <section>
        <h2>Настройки текста по умолчанию</h2>
        <label>
          Цвет текста:
          <select value={textSettings.color} onChange={(e) => setTextColor(e.target.value)}>
            <option value="black">Чёрный</option>
            <option value="sepia">Сепия</option>
            <option value="darkblue">Тёмно-синий</option>
          </select>
        </label>
        <label>
          Размер текста:
          <select value={textSettings.size} onChange={(e) => setTextSize(e.target.value)}>
            <option value="small">Маленький</option>
            <option value="medium">Средйенизкий</option>
            <option value="large">Крупный</option>
          </select>
        </label>
        <label>
          Жирный шрифт:
          <input type="checkbox" checked={textSettings.bold} onChange={toggleBold} />
        </label>
        <button onClick={applyDefaultTextSettings}>Применить как настройки по умолчанию</button>
      </section>
    </div>
  );
}
