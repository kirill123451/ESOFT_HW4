import { useEffect, useState } from "react";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import Select from "react-select";
import './FilterPanel.css';

export default function FilterPanel() {
  const [range, setRange] = useState([1920, 2000]);
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [favoritesOnly, setFavoritesOnly] = useState(false);

  const authorOptions = [
    { value: 'author1', label: 'Гоголь Н.В', isFavorite: true },
    { value: 'author2', label: 'Пушкин А.С', isFavorite: false },
    { value: 'author3', label: 'Чехов А.П', isFavorite: true }
  ];

  const DefaultValue = () => {
    setRange([1920, 2000]);
    setSelectedAuthors([]);
    setFavoritesOnly(false)
  }

  return (
    <div className="filter-panel">
      <div className="filter-row">
        <div className="filter-group">
          <div className="favorites-toggle">
            <label>
              <input
                type="checkbox"
                checked={favoritesOnly}
                onChange={() => setFavoritesOnly(!favoritesOnly)}
              />
              <span>Только избранное</span>
            </label>
          </div>
          <Select
            isMulti
            options={authorOptions}
            value={selectedAuthors}
            onChange={setSelectedAuthors}
            placeholder="Выберите автора..."
            classNamePrefix="react-select"
          />
        </div>

        <div className="filter-group">
          <h3 className="filter-title">Диапазон годов</h3>
          <div className="range-slider-container">
            <RangeSlider 
              min={1900}
              max={2000}
              value={range}
              onInput={setRange}
            />
            <div className="range-values">
              <span>{range[0]}</span>
              <span>{range[1]}</span>
            </div>
            <div>
                <button onClick={DefaultValue} className="reset-button">Сбросить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}