import { useEffect, useState } from "react";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import Select from "react-select";
import './FilterPanel.css';

export default function FilterPanel () {
    const [range, setRange] = useState([1920, 2000])
    useEffect (() => {
        console.log(range)
    }, [range])

    
    const authors = [
        { value: 'author1', label: 'Гоголь Н.В' },
        { value: 'author2', label: 'Пушкин А.С' },
        { value: 'author3', label: 'Чехов А.П' }
    ]

    

    

    

    return (
        <div>
            <div>
                <Select
                    isMulti 
                    options={authors} 
                    placeholder='Выберите автора...' 
                    classNamePrefix="react-select" > 
                </Select>
            </div>
            <div className="filter-section">
                <h3 className="filter-title">Диапазон годов</h3>
                <div className="range-slider-container">
                    <RangeSlider 
                        min={1900}
                        max={2000}
                        value={range}
                        onInput={setRange}
                        className="custom-range-slider"
                    />
                    <div className="range-values">
                        <span>{range[0]}</span>
                        <span>{range[1]}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}