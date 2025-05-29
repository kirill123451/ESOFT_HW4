import favoritesIcon from './icons/favorites.png'
import './Favorites.css' 

export default function Favorites({theme, count = 0}) { 




    return (
        <div className={`favoritesBlock ${theme}-theme`} >
            <button className='favoritesIconButton'>
                <a href="#">
                    <img src={favoritesIcon} className='favoritesIconImage'/>
                </a>
                <span className={`favorites-badge ${theme}-theme `}>
                    {count > 9 ? '9+' : count}
                </span>
            </button>
        </div>
    )
}