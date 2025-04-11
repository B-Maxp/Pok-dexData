import { Link } from 'react-router-dom'
import './Header.css'

function Header() {

    return (
        <>
            <header>
                <img src="../src/assets/pokedex-icon-15.png" alt="Logo Pokédex" className='logo' />
                <img src="../src/assets/téléchargement.png" alt="Logo Pokédex" className='title' />
            </header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Pokédex">Pokédex</Link>
            </nav>
        </>
    )
}

export default Header
