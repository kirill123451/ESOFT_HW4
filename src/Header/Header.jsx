import './Header.css'
import { useState, useEffect } from 'react'
import InputField from './InputField';
import Favorites from './Favorites';

export default function Header() {
    const [theme, setTheme] = useState('light')
    
    useEffect(() => {
        document.body.className = theme;
    }, [theme])

    const switchTheme = () => {
        setTheme((cur) => {
          return (cur === 'light' ? 'dark' : 'light')
        })
    }

    return (
        <header className="header">
            <div className="logo">Book34</div>
            <InputField/>
            <Favorites theme={theme}/>
            <div className="toggle-container">
            <input onChange={switchTheme} type="checkbox" id="toggle-btn" checked={theme === 'dark'}/>
            <label htmlFor="toggle-btn" className="toggle-label"></label>
            </div>
        </header>
    )
}