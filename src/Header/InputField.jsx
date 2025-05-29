import './InputField.css'
import magnifyingGlass from './icons/magnifying glass.png'


export default function InputField() {


    return (
        <div className="d1">
            <form>
            <input type="text" placeholder="Искать здесь..."/>
            <span className="search-hint">Например: "Гарри Поттер", "Достоевский"</span>
            <button type="submit"><img src={magnifyingGlass} alt="Лупа" className='magnifyingGlassIcon' /></button>
            </form>
        </div>
    )
}