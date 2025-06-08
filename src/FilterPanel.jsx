import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import Select from "react-select";
import './FilterPanel.css';

export default function FilterPanel({ currentFilters, onFilterChange }) {
  const authorOptions = [
    { value: 'Гоголь', label: 'Гоголь Н.В' },
    { value: 'Пушкин', label: 'Пушкин А.С' },
    { value: 'Чехов', label: 'Чехов А.П' },
    { value: 'Толстой', label: 'Толстой Л.Н' },
    { value: 'Достоевский', label: 'Достоевский Ф.М' },
  ];

  const handleRangeChange = (newRange) => {
    onFilterChange({ ...currentFilters, range: newRange });
  };

  const handleAuthorsChange = (selected) => {
    onFilterChange({ ...currentFilters, authors: selected });
  };

  const handleFavoritesToggle = () => {
    onFilterChange({ ...currentFilters, favoritesOnly: !currentFilters.favoritesOnly });
  };

  const resetFilters = () => {
    onFilterChange({
      range: [1900, 2000],
      authors: [],
      favoritesOnly: false
    });
  };

  return (
    <div className="filter-panel">
      <div className="filter-row">
        <div className="filter-group">
          <div className="favorites-toggle">
            <label>
              <input
                type="checkbox"
                checked={currentFilters.favoritesOnly}
                onChange={handleFavoritesToggle}
              />
              <span>Только избранное</span>
            </label>
          </div>
          <Select
            isMulti
            options={authorOptions}
            value={currentFilters.authors}
            onChange={handleAuthorsChange}
            placeholder="Выберите автора..."
            classNamePrefix="react-select"
          />
        </div>

        <div className="filter-group">
          <h3 className="filter-title">Диапазон годов</h3>
          <div className="range-slider-container">
            <RangeSlider 
              min={1800}
              max={2023}
              value={currentFilters.range}
              onInput={handleRangeChange}
            />
            <div className="range-values">
              <span>{currentFilters.range[0]}</span>
              <span>{currentFilters.range[1]}</span>
            </div>
            <button onClick={resetFilters} className="reset-button">Сбросить</button>
          </div>
        </div>
      </div>
    </div>
  );
}