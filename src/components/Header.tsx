import { Link } from 'react-router-dom'
import './Header.css'

function Header() {

    return (
        <>
            <header>
                <img src="../src/assets/pokedex-icon-15.png" alt="Logo Pokédex" className='logo' />
                <img src="../src/assets/téléchargement.png" alt="Titre Pokédex Data" className='title' />
                <a href="">
                <Link to="/Login"><img src="../src/assets/Login.png" alt="Login" className='login'/></Link>
                </a>
            </header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Pokédex">Pokédex</Link>
            </nav>
        </>
    )
}

export default Header
