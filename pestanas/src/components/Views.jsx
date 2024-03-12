import '../App.css'
import Contenido from './Contenido'
import { useState } from 'react'

const Views = () => {
    const [tab, setTab] = useState([])
    const [content, setContent] = useState({Anime: ''})
    
    const handleClick = (e) => {
        setTab([...tab, content])
        setContent(e.target.textContent)
        alert('Has seleccionado la pestaña de ' + e.target.name)
    }

    
    return (
        <div>
        <div className="tabs">
            <button id="Naruto" name='Naruto' onClick={handleClick} className={tab === 'Naruto' ? 'active' : ''}>Naruto</button>
            <button id="Dragon Ball" name='Dragon Ball' onClick={handleClick} className={tab === 'DB' ? 'active' : ''}>Dragon Ball</button>
            <button id="One Piece" name= 'One Piece'onClick={handleClick} className={tab === 'OP' ? 'active' : ''}>One Piece</button>
        </div>
        <div className="content">
            <Contenido content={content}/>
        </div>
        </div>
    )
    }

export default Views;
